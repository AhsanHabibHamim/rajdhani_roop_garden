'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Share2, Heart, Star, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Footer() {
  const socialLinks = [
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: Heart, href: '#', label: 'Instagram' },
    { icon: Star, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-forest-dark text-cream pt-20 pb-8 relative overflow-hidden botanical-pattern">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-dark rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif-heading text-gold mb-4">Rajdhani</h3>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Award-winning landscape design studio specializing in parks, resorts, and gardens across Bangladesh.
              We transform spaces into living masterpieces.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/40 transition-all duration-300 text-gold"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif-heading text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/gallery' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif-heading text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Resort Design', href: '/' },
                { label: 'Park & Garden', href: '/' },
                { label: 'Rooftop Gardens', href: '/' },
                { label: 'Redesign & Renovation', href: '/' },
                { label: 'Consultation', href: '/' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif-heading text-gold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-cream/70 text-sm">
                  Banani, Dhaka 1213
                  <br />
                  Bangladesh
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+8801700123456"
                  className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm"
                >
                  +880 1700-123-456
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@rajdhanigarden.com"
                  className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm break-all"
                >
                  hello@rajdhanigarden.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-cream/90 text-sm">
          <p>&copy; 2024 Rajdhani Roop Garden. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
