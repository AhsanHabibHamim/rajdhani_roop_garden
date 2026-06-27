'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-navbar transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-custom shadow-lg shadow-forest/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col gap-0 relative">
            <span className={`text-2xl md:text-3xl font-serif-heading font-bold transition-colors duration-300 ${
              isScrolled ? 'text-forest' : 'text-cream'
            }`}>
              Rajdhani
            </span>
            <span className={`text-xs md:text-sm font-serif-sub transition-colors duration-300 ${
              isScrolled ? 'text-gold' : 'text-gold-light/80'
            }`}>
              ROOP GARDEN
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-accent tracking-widest transition-colors duration-300 relative py-1 ${
                  isScrolled
                    ? isActive(link.href) ? 'text-gold' : 'text-charcoal/80 hover:text-gold'
                    : isActive(link.href) ? 'text-gold' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-gold' : 'bg-gold-light'
                    }`}
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`shimmer-btn text-sm font-accent tracking-widest inline-block ${
                !isScrolled ? 'bg-gold/90 hover:bg-gold' : ''
              }`}
            >
              Start a Project
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-forest hover:text-gold' : 'text-cream hover:text-gold-light'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bg-cream/95 backdrop-blur-custom md:hidden z-modal border-b border-gold/20 shadow-lg"
          >
            <div className="section-container py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-accent tracking-widest transition-colors duration-300 py-2 ${
                    isActive(link.href) ? 'text-gold' : 'text-charcoal/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="shimmer-btn text-sm font-accent tracking-widest w-full text-center mt-2"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
