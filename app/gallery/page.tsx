import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { getGalleryItems } from '@/lib/sanityQueries'
import type { GalleryImage } from '@/lib/types'

export const metadata = {
  title: 'Gallery | Rajdhani Roop Garden Resort',
  description: 'Browse our gallery of stunning resort imagery.',
}

export default async function GalleryPage() {
  let galleryItems: GalleryImage[] = []
  let isError = false

  try {
    galleryItems = await getGalleryItems()
  } catch (error) {
    console.error('Failed to load gallery items from Sanity:', error)
    isError = true
  }

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Visual Journey Through Rajdhani Roop"
        imageSrc="https://images.unsplash.com/photo-1618220179428-22790b461013"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="VISUAL TOUR"
            title="Explore Our Resort"
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isError ? (
              <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
                Gallery content is temporarily unavailable.
              </div>
            ) : galleryItems.length ? (
              galleryItems.map((item, index) => (
                <div
                  key={item.title || index}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                  style={{
                    backgroundColor: '#D4CFC4',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(26, 60, 52, 0.7)' }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm" style={{ color: '#E8D4A8' }}>{item.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
                No gallery items found in the CMS yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
