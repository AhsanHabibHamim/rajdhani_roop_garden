import { createClient } from '@libsql/client'
import path from 'path'

let db: Awaited<ReturnType<typeof createClient>>

export function getDb() {
  if (!db) {
    const isProd = process.env.NODE_ENV === 'production'

    if (isProd && process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
      db = createClient({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
      })
    } else {
      const dbPath = path.join(process.cwd(), 'data', 'rajdhani.db')
      db = createClient({ url: `file:${dbPath}` })
    }

    initTables()
  }
  return db
}

async function initTables() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      image TEXT NOT NULL,
      author TEXT NOT NULL DEFAULT 'Rajdhani Design Team',
      category TEXT NOT NULL DEFAULT 'Design',
      published_at TEXT NOT NULL,
      read_time INTEGER NOT NULL DEFAULT 5,
      tags TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await db.execute(`
    CREATE TABLE IF NOT EXISTS gallery_images (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'garden',
      caption TEXT DEFAULT '',
      image TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await db.execute(`
    CREATE TABLE IF NOT EXISTS youtube_shorts (
      id TEXT PRIMARY KEY,
      video_id TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  await db.execute(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      content TEXT NOT NULL,
      rating INTEGER NOT NULL DEFAULT 5,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)
}
