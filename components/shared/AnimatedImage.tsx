'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  parallax?: boolean
  scale?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width = 500,
  height = 400,
  className = '',
  parallax = true,
  scale = true,
}: AnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: scale ? 1.08 : 1 }}
      whileInView={{ opacity: 1, scale: scale ? 1 : 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay on hover */}
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-gold/20 mix-blend-multiply pointer-events-none"
      />
    </motion.div>
  )
}
