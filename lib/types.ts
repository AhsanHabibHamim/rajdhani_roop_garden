export interface Room {
  id: string
  title: string
  slug: string
  image: string
  gallery?: string[]
  description: string
  fullDescription?: string
  price: number
  maxGuests: number
  bedType: string
  amenities: string[]
  features?: string[]
  size?: number
}

export interface DiningOption {
  id: string
  title: string
  slug: string
  image: string
  description: string
  cuisine: string
  openingHours: string
  specialDishes?: string[]
}

export interface Experience {
  id: string
  title: string
  slug: string
  image: string
  description: string
  duration: string
  maxGuests?: number
  price?: number
  highlights?: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  image: string
  content: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: number
  tags?: string[]
}

export interface Offer {
  id: string
  title: string
  slug: string
  image: string
  description: string
  originalPrice: number
  discountedPrice: number
  discount: number
  highlights: string[]
  validUntil?: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  title: string
  image: string
  content: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}
