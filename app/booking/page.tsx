'use client'

import { useState } from 'react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
  }

  return (
    <>
      <PageHero
        title="Book Your Stay"
        subtitle="Secure Your Dream Getaway"
        imageSrc="/images/hero-garden.png"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container max-w-2xl">
          <motion.form
            onSubmit={handleSubmit}
            className="p-12 rounded-lg"
            style={{ backgroundColor: '#FDFBF7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="RESERVATIONS"
              title="Check Availability"
            />

            <div className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Check In
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#F5F0E8', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Check Out
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#F5F0E8', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#F5F0E8', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3C34' }}>
                    Room Type
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ backgroundColor: '#F5F0E8', color: '#2B2B2B', border: '1px solid #D4CFC4' }}
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Suite</option>
                    <option value="premium">Premium Suite</option>
                    <option value="presidential">Presidential Suite</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                className="shimmer-btn w-full py-4 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Check Availability
              </motion.button>
            </div>

            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#F5F0E8' }}>
              <p style={{ color: '#4A4A47' }} className="text-sm">
                <strong>Need help?</strong> Call us at +880 1700-123-456 or email info@rajdhaniresort.com
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}
