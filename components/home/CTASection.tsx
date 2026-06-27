'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="w-full section-padding relative overflow-hidden" style={{ backgroundColor: '#1A3C34' }}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/image06.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif-heading text-cream mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-cream/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life. Whether it&apos;s a new resort, a park redesign, or a rooftop garden,
            we have the expertise to make it extraordinary.
          </p>
          <Link
            href="/contact"
            className="shimmer-btn text-lg inline-block"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
