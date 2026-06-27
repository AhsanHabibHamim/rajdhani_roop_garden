import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'About Us | Rajdhani Roop Garden | Park & Resort Design',
  description: 'Learn about our passion for landscape design and our mission to transform spaces across Bangladesh.',
}

export default function AboutPage() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '12+', label: 'Years Experience' },
    { number: '15+', label: 'Resorts Designed' },
    { number: '20+', label: 'Parks Created' },
  ]

  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Designing Bangladesh's Finest Outdoor Spaces"
        imageSrc="/images/image02.jpeg"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="ABOUT US"
            title="The Rajdhani Vision"
          />

          <div className="mt-12 space-y-8" style={{ color: '#4A4A47' }}>
            <p className="text-lg leading-relaxed">
              At Rajdhani Roop Garden, we believe that every outdoor space has the potential to be a masterpiece.
              As a dedicated landscape design studio based in Dhaka, we specialize in creating and transforming
              parks, resorts, gardens, and commercial landscapes across Bangladesh.
            </p>

            <p className="text-lg leading-relaxed">
              Our team combines deep knowledge of Bangladeshi ecology, native plant species, and international
              design principles to create spaces that are both beautiful and sustainable. From the serene beaches
              of Cox&apos;s Bazar to the urban rooftops of Dhaka, our work celebrates the natural beauty of Bangladesh.
            </p>

            <p className="text-lg leading-relaxed">
              Every project is approached with creativity, precision, and a deep respect for the environment.
              We don&apos;t just design landscapes &mdash; we create experiences that connect people with nature.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
            title="Transforming Spaces, Enriching Lives"
          />

          <div className="mt-12 space-y-6" style={{ color: '#4A4A47' }}>
            <p className="text-lg leading-relaxed">
              Our mission is to elevate Bangladesh&apos;s landscape architecture by combining artistic vision
              with environmental responsibility. We strive to create outdoor spaces that inspire, rejuvenate,
              and stand the test of time.
            </p>

            <p className="text-lg leading-relaxed">
              Through innovative design, sustainable practices, and meticulous attention to detail,
              we help our clients realize their vision while contributing to a greener, more beautiful Bangladesh.
            </p>

            <p className="text-lg leading-relaxed">
              We are committed to using native plants, water-efficient systems, and eco-friendly materials
              in every project, ensuring that our designs are as responsible as they are beautiful.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
