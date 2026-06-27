'use client'

import { useState } from 'react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', project: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', project: '', message: '' })
  }

  const contactDetails = [
    { icon: MapPin, title: 'Location', content: 'Rajdhani Roop Garden\nBanani, Dhaka 1213\nBangladesh' },
    { icon: Phone, title: 'Phone', content: '+880 1700-123-456' },
    { icon: Mail, title: 'Email', content: 'hello@rajdhanigarden.com' },
    { icon: Clock, title: 'Hours', content: 'Weekdays: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed' },
  ]

  return (
    <>
      <PageHero
        title="Let's Create Together"
        subtitle="Tell us about your project and we'll bring your vision to life"
        imageSrc="/images/image04.jpeg"
        height="medium"
      />

      <section className="w-full section-padding bg-cream relative overflow-hidden">
        <div className="leaf-pattern absolute inset-0 pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="CONTACT"
                title="Reach Out to Us"
                align="left"
                centered={false}
              />

              <div className="mt-12 space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <detail.icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-forest font-serif-heading mb-1">{detail.title}</h3>
                      <p className="text-bark text-sm whitespace-pre-line leading-relaxed">{detail.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-5 bg-cream-light rounded-2xl p-8 luxury-border shadow-forest/5">
                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream text-charcoal border border-mist/60 focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream text-charcoal border border-mist/60 focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream text-charcoal border border-mist/60 focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Project Type</label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream text-charcoal border border-mist/60 focus:border-gold transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="resort">Resort Design</option>
                    <option value="park">Park & Garden</option>
                    <option value="rooftop">Rooftop Garden</option>
                    <option value="redesign">Redesign & Renovation</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-cream text-charcoal border border-mist/60 focus:border-gold transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full text-base font-accent tracking-widest"
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
