import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { EXPERIENCES } from '@/lib/constants'

export const metadata = {
  title: 'Experiences | Rajdhani Roop Garden Resort',
  description: 'Discover unforgettable experiences at our luxury resort.',
}

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="Unforgettable Experiences"
        subtitle="Create Memories That Last Forever"
        imageSrc="/images/hero-garden.png"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="ACTIVITIES"
            title="Curated Experiences"
            subtitle="Immerse yourself in unique activities designed for ultimate relaxation and enjoyment."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((experience, index) => (
              <div
                key={index}
                className="p-8 rounded-lg"
                style={{ backgroundColor: '#FDFBF7' }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A3C34' }}>
                  {experience.title}
                </h3>

                <p className="mb-4" style={{ color: '#4A4A47' }}>
                  {experience.description}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <span style={{ color: '#C9A84C' }}>⏱</span>
                  <p style={{ color: '#4A4A47' }}>{experience.duration}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span style={{ color: '#C9A84C' }}>💰</span>
                  <p style={{ color: '#4A4A47' }}>{experience.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="shimmer-btn">
              Book an Experience
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
