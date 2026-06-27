'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="w-full section-padding relative overflow-hidden bg-warm-gradient">
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/images/image06.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="absolute top-10 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-accent text-gold-light/80 tracking-[0.2em] text-sm uppercase mb-6">
            Let&apos;s Work Together
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-heading text-cream mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-gradient-gold">Your Space?</span>
          </h2>

          <p className="text-base md:text-lg text-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s bring your vision to life. Whether it&apos;s a new resort, a park redesign, or a rooftop garden,
            we have the expertise to make it extraordinary.
          </p>

          <Link
            href="/contact"
            className="shimmer-btn text-base md:text-lg inline-block font-accent tracking-widest"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
