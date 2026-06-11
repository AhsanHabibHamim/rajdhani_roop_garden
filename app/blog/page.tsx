import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { getBlogPosts } from '@/lib/sanityQueries'
import type { BlogPost } from '@/lib/types'

export const metadata = {
  title: 'Blog | Rajdhani Roop Garden Resort',
  description: 'Read stories, tips, and insights from Rajdhani Roop Garden Resort.',
}

export default async function BlogPage() {
  let posts: BlogPost[] = []
  let isError = false

  try {
    posts = await getBlogPosts()
  } catch (error) {
    console.error('Failed to load blog posts from Sanity:', error)
    isError = true
  }

  const content = isError ? (
    <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
      Blog posts are temporarily unavailable.
    </div>
  ) : posts.length ? (
    posts.map((post, index) => (
      <Link
        key={post.slug || index}
        href={`/blog/${post.slug}`}
        className="block rounded-lg overflow-hidden group"
        style={{ backgroundColor: '#FDFBF7' }}
      >
        <div
          className="h-48 overflow-hidden"
          style={{
            backgroundColor: '#D4CFC4',
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: '#E8D4A8', color: '#1A3C34' }}
            >
              {post.category}
            </span>
            <span style={{ color: '#4A4A47' }} className="text-xs">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h3
            className="text-xl font-bold mb-3 group-hover:text-gold transition-colors"
            style={{ color: '#1A3C34' }}
          >
            {post.title}
          </h3>

          <p style={{ color: '#4A4A47' }} className="text-sm">
            {post.excerpt}
          </p>

          <button
            className="mt-4 text-sm font-semibold"
            style={{ color: '#C9A84C' }}
          >
            Read More →
          </button>
        </div>
      </Link>
    ))
  ) : (
    <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
      No blog posts have been published yet.
    </div>
  )

  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Stories and Insights from Rajdhani Roop"
        imageSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="ARTICLES"
            title="Latest Updates"
            subtitle="Discover travel tips, wellness advice, and resort stories."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content}
          </div>
        </div>
      </section>
    </>
  )
}
