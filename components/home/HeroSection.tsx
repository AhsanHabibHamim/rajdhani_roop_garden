'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline()

    tl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-cta',
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out',
        },
        '-=0.4'
      )
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5" style={{ background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.6), rgba(201, 168, 76, 0.3))' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-bold mb-6" style={{ color: '#F5F0E8', fontFamily: 'var(--font-cormorant)' }}>
          Rajdhani Roop Garden
        </h1>

        <p className="hero-subtitle text-lg md:text-2xl mb-8" style={{ color: '#E8D4A8', fontFamily: 'var(--font-jost)' }}>
          Experience Luxury in the Heart of Nature
        </p>

        <motion.button
          className="hero-cta shimmer-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Your Escape
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ color: '#C9A84C', fontSize: '2rem' }}>↓</div>
      </motion.div>
    </div>
  )
}
