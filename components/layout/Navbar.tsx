'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-navbar transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-custom shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col gap-0">
            <span className="text-2xl md:text-3xl font-serif-heading text-forest font-bold">
              Rajdhani
            </span>
            <span className="text-xs md:text-sm text-gold font-serif-sub">
              ROOP GARDEN
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-accent tracking-widest transition-colors duration-300 relative pb-1 ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="shimmer-btn text-sm font-accent tracking-widest"
            >
              Start a Project
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-forest hover:text-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-cream/95 backdrop-blur-custom md:hidden z-40 border-b border-gold/20"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-accent tracking-widest transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="shimmer-btn text-sm font-accent tracking-widest w-full text-center"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
