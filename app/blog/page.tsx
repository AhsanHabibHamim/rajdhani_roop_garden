import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Blog | Rajdhani Roop Garden | Park & Resort Design',
  description: 'Read insights on landscape design, resort architecture, and garden transformation in Bangladesh.',
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  published_at: string
  read_time: number
  tags: string
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/public/blog`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  const content = posts.length ? (
    posts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="block rounded-xl overflow-hidden group bg-cream-light luxury-border-hover shadow-forest/5"
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
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-light text-forest">
              {post.category}
            </span>
            <span className="text-xs text-bark">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h3 className="text-xl font-bold text-forest mb-3 font-serif-heading group-hover:text-gold transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-bark text-sm leading-relaxed">{post.excerpt}</p>

          <div className="mt-4 text-sm font-semibold text-gold font-accent tracking-wider">
            Read More &rarr;
          </div>
        </div>
      </Link>
    ))
  ) : (
    <div className="col-span-full rounded-xl bg-cream-light p-16 text-center text-bark shadow-forest/5 luxury-border">
      No blog posts have been published yet.
    </div>
  )

  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Insights on Landscape Design & Architecture"
        imageSrc="/images/image05.jpeg"
      />

      <section className="w-full section-padding bg-cream relative overflow-hidden">
        <div className="leaf-pattern absolute inset-0 pointer-events-none" />

        <div className="section-container relative z-10">
          <SectionHeading
            label="ARTICLES"
            title="Latest Updates"
            description="Discover design insights, plant guides, and project stories."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content}
          </div>
        </div>
      </section>
    </>
  )
}
