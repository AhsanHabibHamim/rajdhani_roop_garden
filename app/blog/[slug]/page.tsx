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

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="ARTICLE"
            title={post.title}
          />

          <div className="mt-10 text-charcoal/70">
            <p className="text-sm">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
              {' • '}
              {post.author}
            </p>
          </div>

          <div className="mt-10 rounded-xl bg-white p-8" style={{ backgroundColor: '#FDFBF7' }}>
            <PortableText
              value={post.content ?? []}
              components={{
                block: {
                  normal: ({ children }) => <p className="mb-6 leading-relaxed text-charcoal/70">{children}</p>,
                  h2: ({ children }) => <h2 className="mt-10 mb-6 text-3xl font-bold text-charcoal">{children}</h2>,
                  h3: ({ children }) => <h3 className="mt-8 mb-4 text-2xl font-semibold text-charcoal">{children}</h3>,
                },
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
