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

const LeafDivider = () => (
  <svg
    width="40"
    height="16"
    viewBox="0 0 40 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gold"
  >
    <path
      d="M20 16C25.5228 16 30 12.4183 30 8C30 3.58172 25.5228 0 20 0C14.4772 0 10 3.58172 10 8C10 12.4183 14.4772 16 20 16Z"
      fill="currentColor"
      opacity="0.3"
    />
    <path
      d="M20 12C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4C17.7909 4 16 5.79086 16 8C16 10.2091 17.7909 12 20 12Z"
      fill="currentColor"
      opacity="0.6"
    />
    <circle cx="20" cy="8" r="2" fill="currentColor" />
  </svg>
)

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-3xl ${centered ? 'mx-auto' : ''} ${alignClass}`}
    >
      {(label || subtitle) && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gold font-accent text-sm md:text-base tracking-[0.2em] uppercase mb-4"
        >
          {label ?? subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif-heading text-forest mb-4 text-balance"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-bark text-base md:text-lg leading-relaxed text-pretty"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="flex items-center justify-center gap-4 mt-8"
        style={{ transformOrigin: align === 'center' ? 'center' : align === 'left' ? 'left' : 'right' }}
      >
        <div className={`h-px flex-1 bg-gradient-to-r from-transparent to-gold/40 ${align === 'right' ? 'hidden' : ''}`} />
        <div className="flex-shrink-0">
          <LeafDivider />
        </div>
        <div className={`h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent ${align === 'left' ? 'hidden' : ''}`} />
      </motion.div>
    </motion.div>
  )
}
