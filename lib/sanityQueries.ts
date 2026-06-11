import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type {
  BlogPost,
  DiningOption,
  DiningPage,
  Experience,
  GalleryImage,
  Room,
} from './types'

const fallbackImage = '/images/hero-garden.png'

const buildImageUrl = (source: unknown, width = 1200) => {
  if (!source) return fallbackImage
  const url = urlForImage(source).width(width).auto('format').url()
  return url || fallbackImage
}

export const roomsQuery = groq`*[_type == "room"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  image,
  gallery,
  description,
  fullDescription,
  price,
  maxGuests,
  bedType,
  amenities,
  features,
  size,
}`

export const roomBySlugQuery = groq`*[_type == "room" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  image,
  gallery,
  description,
  fullDescription,
  price,
  maxGuests,
  bedType,
  amenities,
  features,
  size,
}`

export const diningPageQuery = groq`*[_type == "dining"] | order(_createdAt desc)[0] {
  title,
  subtitle,
  heroImage,
  description,
  restaurants[] {
    title,
    "slug": slug.current,
    image,
    description,
    cuisine,
    openingHours,
    specialDishes,
  },
  menuCategories[] {
    title,
    description,
    items[] {
      name,
      description,
      price,
    },
  },
  gallery,
}`

export const experiencesQuery = groq`*[_type == "experience"] | order(title asc) {
  title,
  "slug": slug.current,
  image,
  description,
  duration,
  price,
  maxGuests,
  highlights,
  ctaText,
}`

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

export const roomSlugsQuery = groq`*[_type == "room" && defined(slug.current)] { "slug": slug.current }`
export const blogPostSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)] { "slug": slug.current }`

export async function getRooms(): Promise<Room[]> {
  const rooms = await sanityClient.fetch<Room[]>(roomsQuery)
  return rooms.map((room) => ({
    ...room,
    image: buildImageUrl(room.image),
    gallery: Array.isArray(room.gallery)
      ? room.gallery.map((item) => buildImageUrl(item))
      : [],
  }))
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  const room = await sanityClient.fetch<Room | null>(roomBySlugQuery, { slug })
  if (!room) return null
  return {
    ...room,
    image: buildImageUrl(room.image),
    gallery: Array.isArray(room.gallery)
      ? room.gallery.map((item) => buildImageUrl(item))
      : [],
  }
}

export async function getDiningPage(): Promise<DiningPage | null> {
  const dining = await sanityClient.fetch<DiningPage | null>(diningPageQuery)
  if (!dining) return null
  return {
    ...dining,
    heroImage: buildImageUrl(dining.heroImage, 1600),
    restaurants: dining.restaurants?.map((restaurant) => ({
      ...restaurant,
      image: buildImageUrl(restaurant.image, 1200),
    })) ?? [],
    gallery: Array.isArray(dining.gallery)
      ? dining.gallery.map((item) => buildImageUrl(item, 1200))
      : [],
  }
}

export async function getExperiences(): Promise<Experience[]> {
  const experiences = await sanityClient.fetch<Experience[]>(experiencesQuery)
  return experiences.map((experience) => ({
    ...experience,
    image: buildImageUrl(experience.image),
  }))
}

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

export async function getRoomSlugs() {
  return sanityClient.fetch<{ slug: string }[]>(roomSlugsQuery)
}

export async function getBlogPostSlugs() {
  return sanityClient.fetch<{ slug: string }[]>(blogPostSlugsQuery)
}
