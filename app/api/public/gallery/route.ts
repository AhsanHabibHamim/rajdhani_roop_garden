import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  const db = getDb()
  const images = db.prepare('SELECT * FROM gallery_images ORDER BY created_at DESC').all()
  return NextResponse.json(images)
}
