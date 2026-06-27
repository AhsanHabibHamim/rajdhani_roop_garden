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
  height = 'medium',
}: PageHeroProps) {
  const heroImage = imageSrc ?? backgroundImage

  return (
    <section className={`relative ${heightClasses[height]} mt-16 overflow-hidden flex items-center justify-center`}>
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest/40 to-forest-dark/70" />
        </>
      )}

      {!heroImage && (
        <div className="absolute inset-0 bg-warm-gradient" />
      )}

      <div className="relative z-10 section-container text-center text-cream">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-2 mb-6 text-sm text-cream/60"
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
          className="text-4xl md:text-5xl lg:text-7xl font-serif-heading mb-6 text-balance leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl mx-auto text-pretty font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-cream/60 max-w-2xl mx-auto mt-4 text-pretty"
          >
            {description}
          </motion.p>
        )}
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-[10px] font-accent tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
