import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const db = getDb()
  const images = db.prepare('SELECT * FROM gallery_images ORDER BY created_at DESC').all()
  return NextResponse.json(images)
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id, title, category, caption, image } = await req.json()
    const db = getDb()
    db.prepare(`
      INSERT INTO gallery_images (id, title, category, caption, image)
      VALUES (?, ?, ?, ?, ?)
    `).run(id, title, category, caption || '', image)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
