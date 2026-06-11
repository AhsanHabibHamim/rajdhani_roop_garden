import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { getDiningPage } from '@/lib/sanityQueries'
import type { DiningPage } from '@/lib/types'

export const metadata = {
  title: 'Dining | Rajdhani Roop Garden Resort',
  description: 'Experience world-class dining at our award-winning restaurants.',
}

export default async function DiningPage() {
  let diningPage: DiningPage | null = null
  let isError = false

  try {
    diningPage = await getDiningPage()
  } catch (error) {
    console.error('Failed to load dining content from Sanity:', error)
    isError = true
  }

  const restaurants = diningPage?.restaurants ?? []
  const menuCategories = diningPage?.menuCategories ?? []

  return (
    <>
      <PageHero
        title={diningPage?.title ?? 'World-Class Dining'}
        subtitle={diningPage?.subtitle ?? 'Culinary Excellence in Every Dish'}
        imageSrc={diningPage?.heroImage ?? 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1600&q=80'}
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="RESTAURANTS"
            title="Exquisite Dining Experiences"
            subtitle={diningPage?.description ?? 'Discover our collection of award-winning restaurants and bars.'}
          />

          <div className="mt-20 space-y-16">
            {isError ? (
              <div className="rounded-xl bg-white p-12 text-center text-charcoal/80">
                Dining content is temporarily unavailable. Please check back soon.
              </div>
            ) : restaurants.length ? (
              restaurants.map((restaurant, index) => (
                <div
                  key={restaurant.title || index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#1A3C34' }}>
                      {restaurant.title}
                    </h3>

                    <p className="text-lg mb-6" style={{ color: '#4A4A47' }}>
                      {restaurant.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p style={{ color: '#4A4A47' }}>
                        <strong>Cuisine:</strong> {restaurant.cuisine}
                      </p>
                      <p style={{ color: '#4A4A47' }}>
                        <strong>Hours:</strong> {restaurant.openingHours}
                      </p>
                      {restaurant.specialDishes?.length ? (
                        <p style={{ color: '#4A4A47' }}>
                          <strong>Special Dishes:</strong> {restaurant.specialDishes.join(', ')}
                        </p>
                      ) : null}
                    </div>

                    <button className="shimmer-btn">
                      Reserve a Table
                    </button>
                  </div>

                  <div
                    className="h-80 rounded-lg"
                    style={{
                      backgroundColor: '#D4CFC4',
                      backgroundImage: `url(${restaurant.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="rounded-xl bg-white p-12 text-center text-charcoal/80">
                No dining experiences are available yet.
              </div>
            )}
          </div>

          {menuCategories.length > 0 && (
            <div className="mt-16">
              <SectionHeading label="MENU" title="Our Menu" />
              <div className="grid gap-8 lg:grid-cols-2 mt-12">
                {menuCategories.map((category) => (
                  <div key={category.title} className="rounded-xl bg-white p-8" style={{ backgroundColor: '#FDFBF7' }}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A3C34' }}>
                      {category.title}
                    </h3>
                    <p className="mb-6" style={{ color: '#4A4A47' }}>
                      {category.description}
                    </p>
                    <div className="space-y-4">
                      {category.items?.map((item) => (
                        <div key={item.name} className="border-t border-gold/10 pt-4">
                          <div className="flex justify-between items-start gap-4">
                            <p className="font-semibold" style={{ color: '#1A3C34' }}>
                              {item.name}
                            </p>
                            {item.price !== undefined && (
                              <p className="text-charcoal/70">${item.price.toFixed(0)}</p>
                            )}
                          </div>
                          <p className="text-sm mt-2" style={{ color: '#4A4A47' }}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
