'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="section-container">
        <SectionHeading
          label="TESTIMONIALS"
          title="What Our Clients Say"
          subtitle="Hear from resort owners, developers, and property managers who have trusted us with their vision."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="p-8 rounded-lg relative"
              style={{ backgroundColor: '#FDFBF7' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" style={{ color: '#C9A84C' }} />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 italic" style={{ color: '#4A4A47' }}>
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundColor: '#D4CFC4',
                  }}
                />
                <div>
                  <h4 className="font-bold" style={{ color: '#1A3C34' }}>{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: '#C9A84C' }}>{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
