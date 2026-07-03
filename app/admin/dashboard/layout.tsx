'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Blog Posts', href: '/admin/dashboard/blog' },
  { label: 'Gallery', href: '/admin/dashboard/gallery' },
  { label: 'YouTube Shorts', href: '/admin/dashboard/shorts' },
  { label: 'Testimonials', href: '/admin/dashboard/testimonials' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    fetch('/api/admin/verify')
      .then((res) => {
        if (!res.ok) throw new Error('Not authenticated')
        setAuth(true)
      })
      .catch(() => {
        router.push('/admin')
      })
  }, [router])

  if (auth === null) {
    return (
      <div className="min-h-screen bg-forest-dark flex items-center justify-center">
        <div className="text-gold text-xl font-serif-heading">Loading...</div>
      </div>
    )
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-forest-dark flex">
      <aside className="w-64 bg-forest/80 border-r border-gold/10 p-6 hidden md:flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-serif-heading text-gold">Admin Panel</h2>
          <p className="text-cream/40 text-xs font-accent tracking-wider mt-1">Rajdhani Roop Garden</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 rounded-lg text-sm font-accent tracking-wider transition-colors ${
                pathname === item.href
                  ? 'bg-gold/20 text-gold'
                  : 'text-cream/60 hover:text-cream hover:bg-cream/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="w-full py-2.5 px-4 rounded-lg border border-red-400/30 text-red-400 text-sm font-accent tracking-wider hover:bg-red-400/10 transition-colors mt-4"
        >
          Logout
        </button>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-forest/60 border-b border-gold/10 px-6 py-4 md:hidden flex items-center justify-between">
          <h2 className="text-lg font-serif-heading text-gold">Admin</h2>
          <div className="flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs px-3 py-1.5 rounded font-accent tracking-wider ${
                  pathname === item.href
                    ? 'bg-gold/20 text-gold'
                    : 'text-cream/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button onClick={handleLogout} className="text-xs px-3 py-1.5 rounded text-red-400 font-accent">Exit</button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
