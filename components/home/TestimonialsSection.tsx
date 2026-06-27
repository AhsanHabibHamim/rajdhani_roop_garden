'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="w-full section-padding bg-cream relative overflow-hidden">
      <div className="botanical-pattern absolute inset-0 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="TESTIMONIALS"
          title="What Our Clients Say"
          description="Hear from resort owners, developers, and property managers who have trusted us with their vision."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-cream-light rounded-xl p-8 luxury-border-hover shadow-forest/5"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="absolute top-0 right-0 text-6xl text-gold/10 font-serif-heading leading-none p-6">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-base leading-relaxed mb-6 text-bark italic relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center ring-2 ring-gold/20"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundColor: '#D4CFC4',
                  }}
                />
                <div>
                  <h4 className="font-bold text-forest font-serif-heading">{testimonial.name}</h4>
                  <p className="text-sm text-gold font-accent tracking-wider">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
