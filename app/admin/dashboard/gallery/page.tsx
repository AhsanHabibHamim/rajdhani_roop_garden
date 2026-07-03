'use client'

import { useEffect, useState } from 'react'

interface GalleryImage {
  id: string
  title: string
  category: string
  caption: string
  image: string
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [form, setForm] = useState({ title: '', category: 'garden', caption: '', image: '' })

  useEffect(() => {
    fetch('/api/admin/gallery').then(r => r.json()).then(setImages)
  }, [])

  function resetForm() {
    setForm({ title: '', category: 'garden', caption: '', image: '' })
  }

  async function addImage(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/admin/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, id: crypto.randomUUID() }),
    })
    resetForm()
    const updated = await fetch('/api/admin/gallery').then(r => r.json())
    setImages(updated)
  }

  async function deleteImage(id: string) {
    if (!confirm('Delete this image?')) return
    await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' })
    setImages(images.filter(img => img.id !== id))
  }

  async function refresh() {
    const updated = await fetch('/api/admin/gallery').then(r => r.json())
    setImages(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif-heading text-cream">Gallery Images</h1>
        <button onClick={refresh} className="text-sm px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors font-accent tracking-wider">Refresh</button>
      </div>

      <form onSubmit={addImage} className="bg-cream/5 rounded-xl p-6 mb-8 border border-gold/10 space-y-4">
        <h2 className="text-lg font-serif-heading text-gold mb-2">Add Image</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream focus:outline-none focus:border-gold/60">
            <option value="resort">Resort</option>
            <option value="park">Park</option>
            <option value="garden">Garden</option>
            <option value="rooftop">Rooftop</option>
            <option value="commercial">Commercial</option>
          </select>
          <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <input placeholder="Caption" value={form.caption} onChange={e => setForm({ ...form, caption: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" />
        </div>
        <button type="submit" className="px-6 py-2.5 bg-gold text-forest-dark rounded-lg font-accent tracking-wider hover:bg-gold-light transition-colors">Add Image</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="bg-cream/5 rounded-xl overflow-hidden border border-gold/10 group">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${img.image})`, backgroundColor: '#2a3d36' }} />
            <div className="p-4">
              <h3 className="text-cream font-serif-heading truncate">{img.title}</h3>
              <p className="text-cream/40 text-xs mt-1">{img.category}</p>
              <p className="text-cream/60 text-sm mt-1 line-clamp-2">{img.caption}</p>
              <button onClick={() => deleteImage(img.id)} className="mt-3 px-3 py-1.5 text-xs bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition-colors">Delete</button>
            </div>
          </div>
        ))}
        {images.length === 0 && <p className="text-cream/40 text-center py-8 col-span-full">No gallery images yet.</p>}
      </div>
    </div>
  )
}
