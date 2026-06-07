import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Spa & Wellness | Rajdhani Roop Garden Resort',
  description: 'Rejuvenate your mind and body at our world-class spa and wellness center.',
}

export default function SpaPage() {
  const treatments = [
    {
      name: 'Traditional Thai Massage',
      description: 'Ancient healing technique to restore energy and balance.',
      duration: '90 mins',
      price: '$150',
    },
    {
      name: 'Aromatherapy Facial',
      description: 'Luxurious facial using organic botanical extracts.',
      duration: '60 mins',
      price: '$120',
    },
    {
      name: 'Hot Stone Therapy',
      description: 'Deep muscle relaxation using heated volcanic stones.',
      duration: '75 mins',
      price: '$140',
    },
    {
      name: 'Body Scrub & Wrap',
      description: 'Exfoliate and nourish your skin with natural ingredients.',
      duration: '60 mins',
      price: '$130',
    },
    {
      name: 'Meditation & Yoga',
      description: 'Guided sessions in our tranquil garden sanctuary.',
      duration: '60 mins',
      price: '$80',
    },
    {
      name: 'Couples Spa Package',
      description: 'Romantic experience for two in private spa suite.',
      duration: '120 mins',
      price: '$350',
    },
  ]

  return (
    <>
      <PageHero
        title="Wellness & Spa"
        subtitle="Rejuvenation for Mind, Body & Spirit"
        imageSrc="/images/hero-garden.png"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="SPA SERVICES"
            title="Healing Therapies"
            subtitle="Indulge in our comprehensive range of wellness treatments designed for ultimate relaxation."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="p-8 rounded-lg hover:shadow-lg transition-shadow"
                style={{ backgroundColor: '#FDFBF7' }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3C34' }}>
                  {treatment.name}
                </h3>

                <p className="mb-6" style={{ color: '#4A4A47' }}>
                  {treatment.description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#C9A84C' }}>⏱</span>
                    <p style={{ color: '#4A4A47' }}>{treatment.duration}</p>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#C9A84C' }}>
                    {treatment.price}
                  </p>
                </div>

                <button
                  className="w-full py-2 rounded-lg font-semibold transition-all"
                  style={{ backgroundColor: '#1A3C34', color: '#E8D4A8' }}
                >
                  Book Treatment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Amenities */}
      <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="AMENITIES"
            title="Spa Facilities"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🏊', title: 'Infinity Pool', desc: 'Heated year-round' },
              { icon: '🧘', title: 'Yoga Studio', desc: 'Daily classes available' },
              { icon: '🛀', title: 'Steam Room', desc: 'Herbal steam therapy' },
              { icon: '🌿', title: 'Meditation Garden', desc: 'Peaceful retreat space' },
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h4 className="font-bold mb-2" style={{ color: '#1A3C34' }}>
                  {amenity.title}
                </h4>
                <p style={{ color: '#4A4A47' }} className="text-sm">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
