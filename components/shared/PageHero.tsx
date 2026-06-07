'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumb?: Array<{ label: string; href?: string }>
  backgroundImage?: string
  imageSrc?: string
  height?: 'small' | 'medium' | 'large'
}

const heightClasses = {
  small: 'h-64 md:h-80',
  medium: 'h-96 md:h-[500px]',
  large: 'h-[600px] md:h-[700px]',
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumb,
  backgroundImage,
  imageSrc,
  height = 'large',
}: PageHeroProps) {
  const heroImage = imageSrc ?? backgroundImage

  return (
    <section className={`relative ${heightClasses[height]} mt-16 overflow-hidden flex items-center justify-center`}>
      {/* Background Image */}
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Background Gradient Fallback */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest to-forest-light" />
      )}

      {/* Content */}
      <div className="relative z-10 section-container text-center text-cream">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-2 mb-6 text-sm text-cream/70"
          >
            {breadcrumb.map((item, index) => (
              <div key={index}>
                <span>{item.label}</span>
                {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </div>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif-heading mb-6 text-balance"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto text-pretty"
          >
            {subtitle}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mt-4 text-pretty"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-cream/70 text-sm font-accent">Scroll to explore</p>
          <div className="w-6 h-10 border border-cream/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-cream/70 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
