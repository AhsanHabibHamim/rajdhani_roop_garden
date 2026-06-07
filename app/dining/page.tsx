import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { DINING_HERO_IMAGE, DINING_OPTIONS } from '@/lib/constants'

export const metadata = {
  title: 'Dining | Rajdhani Roop Garden Resort',
  description: 'Experience world-class dining at our award-winning restaurants.',
}

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="World-Class Dining"
        subtitle="Culinary Excellence in Every Dish"
        imageSrc={DINING_HERO_IMAGE}
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="RESTAURANTS"
            title="Exquisite Dining Experiences"
            subtitle="Discover our collection of award-winning restaurants and bars."
          />

          <div className="mt-20 space-y-16">
            {DINING_OPTIONS.map((restaurant, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
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
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
