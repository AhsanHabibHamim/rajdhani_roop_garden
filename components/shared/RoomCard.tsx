'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wifi, Users, Wind } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

import type { Room } from '@/lib/types'

interface RoomCardProps {
  room: Room
  index?: number
}

export function RoomCard({
  room,
  index = 0,
}: RoomCardProps) {
  const { id, title, image, description, price, maxGuests, amenities = [], slug } = room
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={400}>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-gold-lg transition-all duration-300 h-full">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-serif-heading text-charcoal mb-2">{title}</h3>
              <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">{description}</p>

              {/* Amenities Icons */}
              {amenities.length > 0 && (
                <div className="flex gap-4 mb-4">
                  {amenities.slice(0, 3).map((amenity, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold text-xs"
                      title={amenity}
                    >
                      {amenity[0].toUpperCase()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gold/20 pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-charcoal/60 text-xs uppercase tracking-widest">
                    From per night
                  </p>
                  <p className="text-2xl font-serif-heading text-forest">
                    ${price}
                    <span className="text-sm text-charcoal/60">/night</span>
                  </p>
                </div>
                <div className="text-right text-charcoal/70 text-sm">
                  <p className="font-accent">Up to {maxGuests} guests</p>
                </div>
              </div>

              <Link
                href={`/rooms/${slug}`}
                className="block w-full bg-forest text-cream hover:bg-forest-dark transition-colors duration-300 py-3 rounded text-center font-accent text-sm tracking-widest"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
