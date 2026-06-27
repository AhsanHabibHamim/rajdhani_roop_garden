'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SERVICES } from '@/lib/constants'

export function AboutSection() {
  return (
    <section className="w-full section-padding bg-cream relative overflow-hidden">
      <div className="leaf-pattern absolute inset-0 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="WHAT WE DO"
          title="Our Services"
          description="We specialize in creating and transforming outdoor spaces into stunning, functional environments that inspire and delight."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-cream-light rounded-xl p-8 text-center luxury-border-hover shadow-forest/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-forest/5 flex items-center justify-center text-3xl group-hover:bg-gold/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-forest mb-3 font-serif-heading">
                  {service.title}
                </h3>
                <p className="text-bark text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold/30 rounded-full group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
