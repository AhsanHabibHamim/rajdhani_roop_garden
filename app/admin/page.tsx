'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [id, setId] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, pass }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Login failed')
        return
      }

      router.push('/admin/dashboard')
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-forest-dark flex items-center justify-center p-4">
      <div className="bg-cream/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-gold/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif-heading text-gold mb-2">Admin Panel</h1>
          <p className="text-cream/60 text-sm">Rajdhani Roop Garden</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-cream/80 text-sm mb-2 font-accent tracking-wider">Admin ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 transition-colors"
              placeholder="Enter admin ID"
              required
            />
          </div>

          <div>
            <label className="block text-cream/80 text-sm mb-2 font-accent tracking-wider">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cream/5 border border-gold/20 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 transition-colors"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold text-forest-dark font-accent tracking-widest rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
