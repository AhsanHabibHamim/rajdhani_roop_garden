import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  const db = getDb()
  const posts = db.prepare('SELECT * FROM blog_posts ORDER BY published_at DESC').all()
  return NextResponse.json(posts)
}
