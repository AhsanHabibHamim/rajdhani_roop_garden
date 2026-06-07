'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  label?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  label,
  description,
  align = 'center',
  centered = true,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl ${centered ? 'mx-auto' : ''} ${alignClass}`}
    >
      {(label || subtitle) && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gold font-accent text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {label ?? subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif-heading text-charcoal mb-6 text-balance"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-charcoal/70 text-base md:text-lg leading-relaxed text-pretty"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-8 ${
          align === 'center' ? 'max-w-xs mx-auto' : align === 'right' ? 'ml-auto max-w-xs' : ''
        }`}
      />
    </motion.div>
  )
}
