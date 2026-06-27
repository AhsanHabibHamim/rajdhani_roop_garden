import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Jost, Cinzel } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/shared/providers/LenisProvider'
import { CustomCursor } from '@/components/shared/providers/CustomCursor'
import { LoadingScreen } from '@/components/shared/providers/LoadingScreen'
import { PageTransition } from '@/components/shared/providers/PageTransition'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1A3C34',
}

export const metadata: Metadata = {
  title: 'Rajdhani Roop Garden | Park & Resort Design Bangladesh',
  description: 'Expert landscape design and redesign for parks, resorts, and gardens across Bangladesh. Transform your space with award-winning design.',
  keywords: ['landscape design', 'resort design', 'park design', 'garden design', 'Bangladesh', 'landscape architect'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  generator: 'v0.app',
  openGraph: {
    title: 'Rajdhani Roop Garden | Park & Resort Design',
    description: 'Expert landscape design for parks, resorts, and gardens across Bangladesh',
    type: 'website',
    images: [{ url: '/images/Logo.png', width: 1200, height: 630, alt: 'Rajdhani Roop Garden' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajdhani Roop Garden | Park & Resort Design',
    description: 'Expert landscape design for parks, resorts, and gardens across Bangladesh',
    images: ['/images/Logo.png'],
  },
  icons: {
    icon: [{ url: '/images/Logo.png', media: '(prefers-color-scheme: light)' }, { url: '/images/Logo.png', media: '(prefers-color-scheme: dark)' }, { url: '/images/Logo.png', type: 'image/png' }],
    apple: '/images/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${jost.variable} ${cinzel.variable}`}
    >
      <body>
        <LenisProvider>
          <PageTransition>
            <CustomCursor />
            <LoadingScreen />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
