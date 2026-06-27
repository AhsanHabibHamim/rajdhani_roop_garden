'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SERVICES } from '@/lib/constants'

export function AboutSection() {
  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="section-container">
        <SectionHeading
          label="WHAT WE DO"
          title="Our Services"
          subtitle="We specialize in creating and transforming outdoor spaces into stunning, functional environments that inspire and delight."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="scroll-reveal-item p-8 rounded-lg text-center"
              style={{ backgroundColor: '#FDFBF7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                {service.title}
              </h3>
              <p style={{ color: '#4A4A47' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
