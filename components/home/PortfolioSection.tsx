'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PROJECTS } from '@/lib/constants'
import Link from 'next/link'

export function PortfolioSection() {
  const featuredProjects = PROJECTS.slice(0, 3)

  return (
    <section className="w-full section-padding bg-cream-light relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          label="OUR WORK"
          title="Featured Projects"
          description="A selection of our finest landscape design and redesign projects across Bangladesh."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-cream-light rounded-xl overflow-hidden shadow-forest/5 luxury-border-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-accent tracking-widest text-gold-light uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-cream/80">{project.year}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-accent tracking-wider text-gold uppercase">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2 font-serif-heading transition-colors duration-300 group-hover:text-gold">
                  {project.title}
                </h3>
                <p className="text-sm text-bark leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="shimmer-btn inline-block font-accent tracking-widest">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
