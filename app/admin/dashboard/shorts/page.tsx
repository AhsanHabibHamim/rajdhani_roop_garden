'use client'

import { useEffect, useState } from 'react'

interface Short {
  id: string
  video_id: string
  title: string
}

export default function ShortsManagement() {
  const [shorts, setShorts] = useState<Short[]>([])
  const [form, setForm] = useState({ video_id: '', title: '' })

  useEffect(() => {
    fetch('/api/admin/shorts').then(r => r.json()).then(setShorts)
  }, [])

  function resetForm() {
    setForm({ video_id: '', title: '' })
  }

  async function addShort(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/admin/shorts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, id: crypto.randomUUID() }),
    })
    resetForm()
    const updated = await fetch('/api/admin/shorts').then(r => r.json())
    setShorts(updated)
  }

  async function deleteShort(id: string) {
    if (!confirm('Delete this short?')) return
    await fetch(`/api/admin/shorts/${id}`, { method: 'DELETE' })
    setShorts(shorts.filter(s => s.id !== id))
  }

  async function refresh() {
    const updated = await fetch('/api/admin/shorts').then(r => r.json())
    setShorts(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif-heading text-cream">YouTube Shorts</h1>
        <button onClick={refresh} className="text-sm px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition-colors font-accent tracking-wider">Refresh</button>
      </div>

      <form onSubmit={addShort} className="bg-cream/5 rounded-xl p-6 mb-8 border border-gold/10 space-y-4">
        <h2 className="text-lg font-serif-heading text-gold mb-2">Add YouTube Short</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Video ID (e.g. _ogzRTmfbrY)" value={form.video_id} onChange={e => setForm({ ...form, video_id: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
          <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2.5 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60" required />
        </div>
        <button type="submit" className="px-6 py-2.5 bg-gold text-forest-dark rounded-lg font-accent tracking-wider hover:bg-gold-light transition-colors">Add Short</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shorts.map(short => (
          <div key={short.id} className="bg-cream/5 rounded-xl p-4 border border-gold/10 flex items-center gap-4">
            <div className="w-20 h-24 rounded-lg bg-forest flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={`https://img.youtube.com/vi/${short.video_id}/mqdefault.jpg`} alt={short.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-cream font-serif-heading truncate">{short.title}</h3>
              <p className="text-cream/40 text-xs mt-1">ID: {short.video_id}</p>
            </div>
            <button onClick={() => deleteShort(short.id)} className="px-3 py-1.5 text-xs bg-red-400/20 text-red-400 rounded-lg hover:bg-red-400/30 transition-colors flex-shrink-0">Delete</button>
          </div>
        ))}
        {shorts.length === 0 && <p className="text-cream/40 text-center py-8 col-span-full">No shorts yet.</p>}
      </div>
    </div>
  )
}
