import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/SiteShell'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Noir Estate | Ultra-Luxury Architectural Stories',
  description: 'A cinematic real estate experience for private estates, penthouses, and architectural residences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}