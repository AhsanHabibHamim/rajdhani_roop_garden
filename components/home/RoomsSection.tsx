'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { RoomCard } from '@/components/shared/RoomCard'
import { ROOMS } from '@/lib/constants'

export function RoomsSection() {
  const featuredRooms = ROOMS.slice(0, 3)

  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="section-container">
        <SectionHeading
          label="ACCOMMODATIONS"
          title="Luxurious Suites & Rooms"
          subtitle="Each room is thoughtfully designed to provide the ultimate comfort and elegance."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            className="shimmer-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Rooms
          </motion.button>
        </div>
      </div>
    </section>
  )
}
