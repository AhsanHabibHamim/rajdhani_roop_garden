'use client'

import { useEffect, useState } from 'react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { YouTubeShortsSection } from '@/components/shared/YouTubeShortsSection'
import Link from 'next/link'

interface GalleryImage {
  id: string
  title: string
  category: string
  caption: string
  image: string
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    fetch('/api/public/gallery')
      .then(r => r.json())
      .then(setImages)
      .catch(() => {})
  }, [])

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
            {images.length ? (
              images.map((img) => (
                <div
                  key={img.id}
                  className="group relative bg-cream-light rounded-xl overflow-hidden luxury-border-hover shadow-forest/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${img.image})`, backgroundColor: '#D4CFC4' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs font-accent tracking-widest text-gold-light uppercase">{img.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-forest mb-2 font-serif-heading transition-colors duration-300 group-hover:text-gold">
                      {img.title}
                    </h3>
                    <p className="text-sm text-bark mb-4 leading-relaxed">{img.caption}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-xl bg-cream-light p-16 text-center text-bark shadow-forest/5">
                Loading gallery images...
              </div>
            )}
          </div>
        </div>
      </section>

      <YouTubeShortsSection />

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
