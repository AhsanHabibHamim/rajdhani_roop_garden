'use client'

import { useState } from 'react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We&apos;d love to hear from you"
        imageSrc="https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?text=Demo"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionHeading
                label="CONTACT"
                title="Reach Out to Us"
              />

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                    Location
                  </h3>
                  <p style={{ color: '#4A4A47' }}>
                    Rajdhani Roop Garden Resort<br />
                    Dhaka, Bangladesh
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                    Phone
                  </h3>
                  <p style={{ color: '#4A4A47' }}>
                    +880 1700-123-456
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                    Email
                  </h3>
                  <p style={{ color: '#4A4A47' }}>
                    info@rajdhaniresort.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>
                    Hours
                  </h3>
                  <p style={{ color: '#4A4A47' }}>
                    Monday - Sunday<br />
                    24/7 Service Available
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#FDFBF7', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#FDFBF7', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#FDFBF7', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
