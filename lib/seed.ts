import { getDb } from './db'
import { BLOG_POSTS, PROJECTS, TESTIMONIALS, YOUTUBE_SHORTS } from './constants'

export function seedDatabase() {
  const db = getDb()

  const existingBlogs = db.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number }
  if (existingBlogs.count === 0) {
    const insertBlog = db.prepare(`
      INSERT OR IGNORE INTO blog_posts (id, title, slug, excerpt, content, image, author, category, published_at, read_time, tags)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    for (const post of BLOG_POSTS) {
      insertBlog.run(post.id, post.title, post.slug, post.excerpt, post.content || '', post.image, post.author, post.category, post.publishedAt, post.readTime || 5, JSON.stringify(post.tags || []))
    }
  }

  const existingGallery = db.prepare('SELECT COUNT(*) as count FROM gallery_images').get() as { count: number }
  if (existingGallery.count === 0) {
    const insertGallery = db.prepare(`
      INSERT OR IGNORE INTO gallery_images (id, title, category, caption, image)
      VALUES (?, ?, ?, ?, ?)
    `)
    for (const project of PROJECTS) {
      insertGallery.run(project.id, project.title, project.category, project.description, project.image)
    }
  }

  const existingTestimonials = db.prepare('SELECT COUNT(*) as count FROM testimonials').get() as { count: number }
  if (existingTestimonials.count === 0) {
    const insertTestimonial = db.prepare(`
      INSERT OR IGNORE INTO testimonials (id, name, title, image, content, rating)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    for (const t of TESTIMONIALS) {
      insertTestimonial.run(t.id, t.name, t.title, t.image, t.content, t.rating)
    }
  }

  const existingShorts = db.prepare('SELECT COUNT(*) as count FROM youtube_shorts').get() as { count: number }
  if (existingShorts.count === 0) {
    const insertShort = db.prepare(`
      INSERT OR IGNORE INTO youtube_shorts (id, video_id, title)
      VALUES (?, ?, ?)
    `)
    for (const s of YOUTUBE_SHORTS) {
      insertShort.run(s.id, s.video_id, s.title)
    }
  }
}
