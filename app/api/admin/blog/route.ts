import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const db = getDb()
  const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all()
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id, title, slug, excerpt, content, image, author, category, publishedAt, readTime, tags } = await req.json()
    const db = getDb()
    db.prepare(`
      INSERT INTO blog_posts (id, title, slug, excerpt, content, image, author, category, published_at, read_time, tags)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, slug, excerpt, content, image, author, category, publishedAt, readTime, JSON.stringify(tags || []))
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
