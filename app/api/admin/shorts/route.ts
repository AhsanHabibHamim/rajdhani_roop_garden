import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getDb } from '@/lib/db'

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const db = getDb()
  const shorts = db.prepare('SELECT * FROM youtube_shorts ORDER BY created_at DESC').all()
  return NextResponse.json(shorts)
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { id, video_id, title } = await req.json()
    const db = getDb()
    db.prepare(`
      INSERT INTO youtube_shorts (id, video_id, title)
      VALUES (?, ?, ?)
    `).run(id, video_id, title)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
