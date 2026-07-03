import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const db = getDb()
  const testimonials = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all()
  return NextResponse.json(testimonials)
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id, name, title, image, content, rating } = await req.json()
    const db = getDb()
    db.prepare(`
      INSERT INTO testimonials (id, name, title, image, content, rating)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, name || '', title || '', image || '', content || '', rating || 5)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
