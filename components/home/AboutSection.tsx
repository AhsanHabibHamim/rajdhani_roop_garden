'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function AboutSection() {
  const features = [
    { icon: '🌿', title: 'Garden Paradise', description: '5 acres of lush botanical gardens' },
    { icon: '⭐', title: 'Luxury Comfort', description: 'World-class amenities and services' },
    { icon: '👨‍🍳', title: 'Fine Dining', description: 'Award-winning culinary experiences' },
    { icon: '🧘', title: 'Wellness Spa', description: 'Rejuvenation and relaxation' },
  ]

  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="section-container">
        <SectionHeading
          label="DISCOVER"
          title="The Rajdhani Experience"
          subtitle="Nestled in the heart of Dhaka, our luxury resort offers an unparalleled escape into nature's embrace while maintaining world-class hospitality standards."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="scroll-reveal-item p-8 rounded-lg text-center"
              style={{ backgroundColor: '#FDFBF7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#4A4A47' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
