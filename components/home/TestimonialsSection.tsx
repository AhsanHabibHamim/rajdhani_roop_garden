'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="section-container">
        <SectionHeading
          label="GUEST REVIEWS"
          title="Words from Our Guests"
          subtitle="Discover what our valued guests have to say about their unforgettable stays."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#FDFBF7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#C9A84C', fontSize: '1.25rem' }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 italic" style={{ color: '#4A4A47' }}>
                {`"${testimonial.content}"`}
              </p>
              <div>
                <p className="font-bold" style={{ color: '#1A3C34' }}>
                  {testimonial.name}
                </p>
                <p style={{ color: '#4A4A47' }} className="text-sm">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
