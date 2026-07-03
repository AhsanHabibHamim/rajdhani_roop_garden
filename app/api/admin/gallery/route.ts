import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const db = getDb()
  const result = await db.execute('SELECT * FROM gallery_images ORDER BY created_at DESC')
  return NextResponse.json(result.rows)
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id, title, category, caption, image } = await req.json()
    const db = getDb()
    await db.execute({
      sql: `INSERT INTO gallery_images (id, title, category, caption, image) VALUES (?, ?, ?, ?, ?)`,
      args: [id, title, category, caption || '', image],
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
