import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function GET() {
  const isAuth = await getSession()
  if (!isAuth) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
  return NextResponse.json({ authenticated: true })
}
