export interface Project {
  id: string
  title: string
  slug: string
  image: string
  gallery?: string[]
  description: string
  fullDescription?: string
  location: string
  category: 'resort' | 'park' | 'garden' | 'rooftop' | 'commercial'
  area: string
  year: string
  highlights?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  image: string
  content: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  image: string
  content?: any
  excerpt: string
  author: string
  publishedAt: string
  category: string
  readTime?: number
  tags?: string[]
  coverImage?: any
}

export interface GalleryImage {
  id: string
  title: string
  category: string
  image: string
  caption?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}
