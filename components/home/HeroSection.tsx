'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Link from 'next/link'

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
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("/images/image01.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      <div className="absolute inset-0 z-5" style={{ background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.6), rgba(201, 168, 76, 0.3))' }} />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-bold mb-6" style={{ color: '#F5F0E8', fontFamily: 'var(--font-cormorant)' }}>
          Rajdhani Roop Garden
        </h1>

        <p className="hero-subtitle text-lg md:text-2xl mb-4" style={{ color: '#E8D4A8', fontFamily: 'var(--font-jost)' }}>
          Park & Resort Design Studio
        </p>

        <p className="hero-subtitle text-base md:text-lg mb-8" style={{ color: '#F5F0E8', fontFamily: 'var(--font-jost)', opacity: 0.8 }}>
          Designing and redesigning breathtaking spaces across Bangladesh
        </p>

        <Link
          href="/gallery"
          className="hero-cta shimmer-btn inline-block"
        >
          View Our Portfolio
        </Link>
      </div>

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
