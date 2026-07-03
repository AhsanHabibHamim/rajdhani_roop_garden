import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function GET() {
  const db = getDb()
  const result = await db.execute('SELECT * FROM gallery_images ORDER BY created_at DESC')
  return NextResponse.json(result.rows)
}
