'use client'

import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="w-full py-20 md:py-32" style={{ backgroundColor: '#1A3C34' }}>
      <div className="section-container text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: '#E8D4A8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Experience Paradise?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: '#D4CFC4' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Plan your perfect getaway today and create memories that will last a lifetime.
        </motion.p>

        <motion.button
          className="shimmer-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Book Now
        </motion.button>
      </div>
    </section>
  )
}
