'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PROJECTS } from '@/lib/constants'
import Link from 'next/link'

export function PortfolioSection() {
  const featuredProjects = PROJECTS.slice(0, 3)

  return (
    <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="section-container">
        <SectionHeading
          label="OUR WORK"
          title="Featured Projects"
          subtitle="A selection of our finest landscape design and redesign projects across Bangladesh."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-lg overflow-hidden group cursor-pointer"
              style={{ backgroundColor: '#FDFBF7' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-accent tracking-wider text-gold uppercase">{project.category}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-accent tracking-wider uppercase" style={{ color: '#C9A84C' }}>{project.location}</span>
                  <span className="text-xs" style={{ color: '#4A4A47' }}>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3C34' }}>{project.title}</h3>
                <p className="text-sm" style={{ color: '#4A4A47' }}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="shimmer-btn inline-block">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
