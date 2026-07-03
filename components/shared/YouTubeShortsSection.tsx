'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'

interface Short {
  id: string
  video_id: string
  title: string
}

export function YouTubeShortsSection() {
  const [shorts, setShorts] = useState<Short[]>([])

  useEffect(() => {
    fetch('/api/public/shorts')
      .then(r => r.json())
      .then(setShorts)
      .catch(() => {})
  }, [])

  if (!shorts.length) return null

  return (
    <section className="w-full section-padding bg-cream relative overflow-hidden">
      <div className="leaf-pattern absolute inset-0 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="VIDEOS"
          title="Watch Our Work in Action"
          description="Short videos showcasing our landscape design and transformation projects."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {shorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative rounded-xl overflow-hidden luxury-border-hover shadow-forest/5 bg-cream-light"
            >
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${short.video_id}`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
