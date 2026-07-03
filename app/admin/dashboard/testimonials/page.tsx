'use client'

import { useEffect, useState } from 'react'

interface Testimonial {
  id: string
  name: string
  title: string
  image: string
  content: string
  rating: number
}

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [form, setForm] = useState({ name: '', title: '', image: '', content: '', rating: 5 })

  useEffect(() => {
    fetch('/api/admin/testimonials').then(r => r.json()).then(setTestimonials)
  }, [])

  function resetForm() {
    setForm({ name: '', title: '', image: '', content: '', rating: 5 })
  }

  async function addTestimonial(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.content) return
    await fetch('/api/admin/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, id: crypto.randomUUID() }),
    })
    resetForm()
    const updated = await fetch('/api/admin/testimonials').then(r => r.json())
    setTestimonials(updated)
  }

  async function deleteTestimonial(id: string) {
    if (!confirm('Delete this testimonial?')) return
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  async function refresh() {
    const updated = await fetch('/api/admin/testimonials').then(r => r.json())
    setTestimonials(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif-heading text-cream">Testimonials</h1>
        <button onClick={refresh} className="text-sm px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors font-accent tracking-wider">Refresh</button>
      </div>

      <form onSubmit={addTestimonial} className="bg-cream/5 rounded-xl p-6 mb-8 border border-gold/10 space-y-4">
        <h2 className="text-lg font-serif-heading text-gold mb-2">Add Testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Client Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <input placeholder="Title (e.g. CEO, Company)" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          <div>
            <label className="block text-cream/60 text-xs mb-1 font-accent">Rating (1-5)</label>
            <input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({ ...form, rating: +e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
          </div>
        </div>
        <textarea placeholder="Testimonial content" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 h-24" required />
        <button type="submit" className="px-6 py-2.5 bg-gold text-forest-dark rounded-lg font-accent tracking-wider hover:bg-gold-light transition-colors">Add Testimonial</button>
      </form>

      <div className="space-y-3">
        {testimonials.map(t => (
          <div key={t.id} className="bg-cream/5 rounded-xl p-5 border border-gold/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0 ring-2 ring-gold/20" style={{ backgroundImage: `url(${t.image})`, backgroundColor: '#2a3d36' }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-cream font-serif-heading">{t.name}</h3>
                <span className="text-gold text-xs">{'★'.repeat(t.rating)}</span>
              </div>
              <p className="text-cream/40 text-xs">{t.title}</p>
              <p className="text-cream/60 text-sm mt-2 line-clamp-3">{t.content}</p>
            </div>
            <button onClick={() => deleteTestimonial(t.id)} className="px-3 py-1.5 text-xs bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition-colors flex-shrink-0">Delete</button>
          </div>
        ))}
        {testimonials.length === 0 && <p className="text-cream/40 text-center py-8">No testimonials yet.</p>}
      </div>
    </div>
  )
}
