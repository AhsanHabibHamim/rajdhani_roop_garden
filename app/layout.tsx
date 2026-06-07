import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Jost, Cinzel } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { CustomCursor } from '@/components/providers/CustomCursor'
import { LoadingScreen } from '@/components/providers/LoadingScreen'
import { PageTransition } from '@/components/providers/PageTransition'
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
  title: 'Rajdhani Roop Garden Resort | Luxury Boutique Hotel Dhaka',
  description: 'Experience luxury in the heart of Dhaka. Rajdhani Roop Garden offers 5-acre garden, world-class dining, spa, and unforgettable experiences.',
  keywords: ['luxury resort', 'hotel Dhaka', 'boutique hotel', 'garden resort', 'spa', 'dining'],
  generator: 'v0.app',
  openGraph: {
    title: 'Rajdhani Roop Garden Resort',
    description: 'Luxury boutique resort in Dhaka, Bangladesh',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/images/Logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/Logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/Logo.png',
        type: 'image/png',
      },
    ],
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
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <body style={{ backgroundColor: '#F5F0E8', color: '#2B2B2B' }}>
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
