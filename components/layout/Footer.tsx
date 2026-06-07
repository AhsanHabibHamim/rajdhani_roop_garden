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
      {/* Background Pattern */}
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
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif-heading text-gold mb-4">Rajdhani</h3>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Experience timeless luxury in the heart of Dhaka. Our 5-acre botanical garden
              sanctuary offers world-class hospitality and unforgettable moments.
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

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif-heading text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Rooms', href: '/rooms' },
                { label: 'Dining', href: '/dining' },
                { label: 'Experiences', href: '/experiences' },
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

          {/* Amenities */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif-heading text-gold mb-6">Experience</h4>
            <ul className="space-y-3">
              {[
                { label: 'Spa & Wellness', href: '/experiences' },
                { label: 'Fine Dining', href: '/dining' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Blog', href: '/blog' },
                { label: 'Special Offers', href: '/offers' },
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

          {/* Contact Info */}
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
                  href="tel:+880298850000"
                  className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm"
                >
                  +880 2 9885 0000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@rajdhanigarden.com"
                  className="text-cream/90 hover:text-gold transition-colors duration-300 text-sm break-all"
                >
                  info@rajdhanigarden.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-cream/90 text-sm">
          <p>&copy; 2024 Rajdhani Roop Garden Resort. All rights reserved.</p>
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
