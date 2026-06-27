import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/sanityQueries'

export const dynamicParams = false
export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getBlogPostSlugs()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug?: string } }) {
  if (!params.slug) {
    notFound()
  }

  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        imageSrc={post.image}
      />

      <section className="w-full section-padding bg-cream relative overflow-hidden">
        <div className="leaf-pattern absolute inset-0 pointer-events-none" />

        <div className="section-container relative z-10">
          <SectionHeading
            label="ARTICLE"
            title={post.title}
          />

          <div className="mt-8 text-bark/70 text-sm flex items-center gap-2 justify-center">
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}</span>
            <span className="text-gold">&bull;</span>
            <span>{post.author}</span>
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-cream-light rounded-2xl p-8 md:p-12 luxury-border shadow-forest/5">
            <PortableText
              value={post.content ?? []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-bark text-base md:text-lg">{children}</p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-12 mb-6 text-3xl font-bold text-forest font-serif-heading">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-10 mb-4 text-2xl font-semibold text-forest font-serif-heading">{children}</h3>
                  ),
                },
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
