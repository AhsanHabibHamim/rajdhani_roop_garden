import { NextResponse } from 'next/server'
import { validateCredentials, createToken, setSessionCookie } from '@/lib/auth'
import { seedDatabase } from '@/lib/seed'

export async function POST(req: Request) {
  try {
    const { id, pass } = await req.json()

    if (!validateCredentials(id, pass)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = await createToken()
    await setSessionCookie(token)

    seedDatabase()

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
