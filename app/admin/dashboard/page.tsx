'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [stats, setStats] = useState({ blogs: 0, gallery: 0, shorts: 0, testimonials: 0 })

  useEffect(() => {
    async function load() {
      const [blogs, gallery, shorts, testimonials] = await Promise.all([
        fetch('/api/admin/blog').then(r => r.json()),
        fetch('/api/admin/gallery').then(r => r.json()),
        fetch('/api/admin/shorts').then(r => r.json()),
        fetch('/api/admin/testimonials').then(r => r.json()),
      ])
      setStats({
        blogs: Array.isArray(blogs) ? blogs.length : 0,
        gallery: Array.isArray(gallery) ? gallery.length : 0,
        shorts: Array.isArray(shorts) ? shorts.length : 0,
        testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
      })
    }
    load()
  }, [])

  const cards = [
    { label: 'Blog Posts', value: stats.blogs, color: 'border-blue-500/50' },
    { label: 'Gallery Images', value: stats.gallery, color: 'border-emerald-500/50' },
    { label: 'YouTube Shorts', value: stats.shorts, color: 'border-red-500/50' },
    { label: 'Testimonials', value: stats.testimonials, color: 'border-yellow-500/50' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-serif-heading text-cream mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.label} className={`bg-cream/5 rounded-xl p-6 border-l-4 ${card.color}`}>
            <p className="text-cream/60 text-sm font-accent tracking-wider mb-2">{card.label}</p>
            <p className="text-3xl font-bold text-gold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
