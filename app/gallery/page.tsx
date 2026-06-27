import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PROJECTS } from '@/lib/constants'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | Rajdhani Roop Garden | Park & Resort Design',
  description: 'Explore our portfolio of landscape design projects including resorts, parks, gardens, and rooftop spaces across Bangladesh.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="A showcase of our finest landscape design and redesign projects"
        imageSrc="/images/image03.jpeg"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="OUR WORK"
            title="Featured Projects"
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.length ? (
              PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg overflow-hidden group"
                  style={{ backgroundColor: '#FDFBF7' }}
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
                    <p className="text-sm mb-3" style={{ color: '#4A4A47' }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights?.slice(0, 2).map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: '#F5F0E8', color: '#1A3C34' }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
                No projects found yet.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="section-container text-center">
          <SectionHeading
            label="GET IN TOUCH"
            title="Have a Project in Mind?"
            description="Let's discuss how we can transform your outdoor space into something extraordinary."
          />
          <div className="mt-10">
            <Link
              href="/contact"
              className="shimmer-btn text-lg inline-block"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
