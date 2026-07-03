import { notFound } from 'next/navigation'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'

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

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/public/blog`, { cache: 'no-store' })
    if (!res.ok) return null
    const posts: BlogPost[] = await res.json()
    return posts.find(p => p.slug === slug) || null
  } catch {
    return null
  }
}

async function getAllSlugs(): Promise<string[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/public/blog`, { cache: 'no-store' })
    if (!res.ok) return []
    const posts: BlogPost[] = await res.json()
    return posts.map(p => p.slug)
  } catch {
    return []
  }
}

export const dynamicParams = false
export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: { slug?: string } }) {
  if (!params.slug) {
    notFound()
  }

  const post = await getPost(params.slug)

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
            <span>{new Date(post.published_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}</span>
            <span className="text-gold">&bull;</span>
            <span>{post.author}</span>
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-cream-light rounded-2xl p-8 md:p-12 luxury-border shadow-forest/5">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').filter(Boolean).map((paragraph, i) => (
                <p key={i} className="mb-6 leading-relaxed text-bark text-base md:text-lg">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
