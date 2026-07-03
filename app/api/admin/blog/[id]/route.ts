import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id } = await params
    const { title, slug, excerpt, content, image, author, category, publishedAt, readTime, tags } = await req.json()
    const db = getDb()
    db.prepare(`
      UPDATE blog_posts SET title=?, slug=?, excerpt=?, content=?, image=?, author=?, category=?, published_at=?, read_time=?, tags=?, updated_at=datetime('now')
      WHERE id=?
    `).run(title, slug, excerpt, content, image, author, category, publishedAt, readTime, JSON.stringify(tags || []), id)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id } = await params
    const db = getDb()
    db.prepare('DELETE FROM blog_posts WHERE id=?').run(id)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
