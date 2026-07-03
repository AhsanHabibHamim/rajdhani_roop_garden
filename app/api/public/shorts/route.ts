import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  const db = getDb()
  const shorts = db.prepare('SELECT * FROM youtube_shorts ORDER BY created_at DESC').all()
  return NextResponse.json(shorts)
}
