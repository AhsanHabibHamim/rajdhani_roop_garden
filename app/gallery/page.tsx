import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Gallery | Rajdhani Roop Garden Resort',
  description: 'Browse our gallery of stunning resort imagery.',
}

export default function GalleryPage() {
  const galleryItems = [
    { 
      title: 'Garden Paradise', 
      category: 'Gardens',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80'
    },
    { 
      title: 'Luxury Suite', 
      category: 'Rooms',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80'
    },
    { 
      title: 'Fine Dining', 
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80'
    },
    { 
      title: 'Wellness Spa', 
      category: 'Spa',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80'
    },
    { 
      title: 'Pool Area', 
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80'
    },
    { 
      title: 'Event Venue', 
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80'
    },
  ]

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
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: '#D4CFC4',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(26, 60, 52, 0.7)' }}
                />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: '#E8D4A8' }}>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
