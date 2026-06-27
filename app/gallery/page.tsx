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

      <section className="w-full section-padding bg-cream relative overflow-hidden">
        <div className="leaf-pattern absolute inset-0 pointer-events-none" />

        <div className="section-container relative z-10">
          <SectionHeading
            label="OUR WORK"
            title="Featured Projects"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.length ? (
              PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-cream-light rounded-xl overflow-hidden luxury-border-hover shadow-forest/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs font-accent tracking-widest text-gold-light uppercase">{project.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-accent tracking-wider text-gold uppercase">{project.location}</span>
                      <span className="text-xs text-bark">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-forest mb-2 font-serif-heading transition-colors duration-300 group-hover:text-gold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-bark mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights?.slice(0, 2).map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-cream text-forest font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-xl bg-cream-light p-16 text-center text-bark shadow-forest/5">
                No projects found yet.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full section-padding bg-cream-light">
        <div className="section-container text-center">
          <SectionHeading
            label="GET IN TOUCH"
            title="Have a Project in Mind?"
            description="Let's discuss how we can transform your outdoor space into something extraordinary."
          />
          <div className="mt-10">
            <Link
              href="/contact"
              className="shimmer-btn text-lg inline-block font-accent tracking-widest"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
