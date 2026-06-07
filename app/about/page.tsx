import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'About Us | Rajdhani Roop Garden Resort',
  description: 'Learn about our heritage, mission, and commitment to luxury hospitality.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="A Legacy of Luxury and Excellence"
        imageSrc="https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="OUR HERITAGE"
            title="The Rajdhani Roop Tradition"
          />

          <div className="mt-12 space-y-8" style={{ color: '#4A4A47' }}>
            <p className="text-lg leading-relaxed">
              Rajdhani Roop Garden Resort stands as a beacon of luxury hospitality in the heart of Dhaka. Our commitment to excellence has been the cornerstone of our success since our establishment.
            </p>

            <p className="text-lg leading-relaxed">
              Nestled within 5 acres of meticulously maintained botanical gardens, our resort offers a serene escape from the urban hustle while maintaining proximity to the city's finest attractions.
            </p>

            <p className="text-lg leading-relaxed">
              Every detail, from the architecture to the service, reflects our dedication to creating unforgettable experiences for our guests. We believe that luxury is not just about opulence, but about genuine hospitality and attention to the smallest details.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Excellence' },
              { number: '150+', label: 'Rooms & Suites' },
              { number: '10K+', label: 'Happy Guests' },
              { number: '5', label: 'Stars Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#C9A84C' }}>
                  {stat.number}
                </div>
                <p style={{ color: '#4A4A47' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="OUR MISSION"
            title="Commitment to Excellence"
          />

          <div className="mt-12 space-y-6" style={{ color: '#4A4A47' }}>
            <p className="text-lg leading-relaxed">
              Our mission is to provide world-class hospitality services that exceed expectations and create lasting memories for every guest.
            </p>

            <p className="text-lg leading-relaxed">
              We are committed to sustainability, innovation, and the continuous improvement of our services. Our team works tirelessly to ensure that every moment of your stay is exceptional.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
