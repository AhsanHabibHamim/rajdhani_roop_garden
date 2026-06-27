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

    tl.from('.hero-line-1', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    })
      .from('.hero-line-2', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-line-3', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.3')
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/image01.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-forest-dark/70 via-forest/50 to-forest-dark/80" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-forest-dark/30 to-transparent" />

      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl z-[1]" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <p className="hero-line-3 font-accent text-gold-light/80 tracking-[0.2em] text-sm md:text-base uppercase mb-6">
          Park & Resort Design Studio
        </p>

        <h1
          className="hero-line-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-cream font-serif-heading leading-tight"
        >
          Rajdhani
          <br />
          <span className="text-gradient-gold">Roop Garden</span>
        </h1>

        <p className="hero-line-2 text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Designing and redesigning breathtaking parks, resorts, and gardens across Bangladesh
        </p>

        <Link
          href="/gallery"
          className="hero-cta shimmer-btn inline-block text-base font-accent tracking-widest"
        >
          Explore Our Portfolio
        </Link>
      </div>

      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-cream/50 text-xs font-accent tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </div>
  )
}
