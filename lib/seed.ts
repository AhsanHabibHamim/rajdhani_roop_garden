import { getDb } from './db'
import { BLOG_POSTS, PROJECTS, TESTIMONIALS, YOUTUBE_SHORTS } from './constants'

export async function seedDatabase() {
  const db = getDb()

  const existingBlogs = await db.execute('SELECT COUNT(*) as count FROM blog_posts')
  if (existingBlogs.rows[0]?.count === 0) {
    for (const post of BLOG_POSTS) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO blog_posts (id, title, slug, excerpt, content, image, author, category, published_at, read_time, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [post.id, post.title, post.slug, post.excerpt, post.content || '', post.image, post.author, post.category, post.publishedAt, post.readTime || 5, JSON.stringify(post.tags || [])],
      })
    }
  }

  const existingGallery = await db.execute('SELECT COUNT(*) as count FROM gallery_images')
  if (existingGallery.rows[0]?.count === 0) {
    for (const project of PROJECTS) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO gallery_images (id, title, category, caption, image) VALUES (?, ?, ?, ?, ?)`,
        args: [project.id, project.title, project.category, project.description, project.image],
      })
    }
  }

  const existingTestimonials = await db.execute('SELECT COUNT(*) as count FROM testimonials')
  if (existingTestimonials.rows[0]?.count === 0) {
    for (const t of TESTIMONIALS) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO testimonials (id, name, title, image, content, rating) VALUES (?, ?, ?, ?, ?, ?)`,
        args: [t.id, t.name, t.title, t.image, t.content, t.rating],
      })
    }
  }

  const existingShorts = await db.execute('SELECT COUNT(*) as count FROM youtube_shorts')
  if (existingShorts.rows[0]?.count === 0) {
    for (const s of YOUTUBE_SHORTS) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO youtube_shorts (id, video_id, title) VALUES (?, ?, ?)`,
        args: [s.id, s.video_id, s.title],
      })
    }
  }
}
