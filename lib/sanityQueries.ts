import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type {
  BlogPost,
  GalleryImage,
} from './types'

const fallbackImage = '/images/hero-garden.png'

const buildImageUrl = (source: unknown, width = 1200) => {
  if (!source) return fallbackImage
  const url = urlForImage(source).width(width).auto('format').url()
  return url || fallbackImage
}

export const galleryQuery = groq`*[_type == "galleryImage"] | order(title asc) {
  title,
  category,
  image,
  caption,
}`

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  author,
  category,
  content,
}`

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  author,
  category,
  content,
}`

export const blogPostSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)] { "slug": slug.current }`

export async function getGalleryItems(): Promise<GalleryImage[]> {
  const items = await sanityClient.fetch<GalleryImage[]>(galleryQuery)
  return items.map((item) => ({
    ...item,
    image: buildImageUrl(item.image),
  }))
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await sanityClient.fetch<BlogPost[]>(blogPostsQuery)
  return posts.map((post) => ({
    ...post,
    image: buildImageUrl(post.coverImage, 1200),
  }))
}

export async function getBlogPostBySlug(
  slug: string | null | undefined,
): Promise<BlogPost | null> {
  if (!slug) return null
  const post = await sanityClient.fetch<BlogPost | null>(blogPostBySlugQuery, { slug })
  if (!post) return null
  return {
    ...post,
    image: buildImageUrl(post.coverImage, 1600),
  }
}

export async function getBlogPostSlugs() {
  return sanityClient.fetch<{ slug: string }[]>(blogPostSlugsQuery)
}
