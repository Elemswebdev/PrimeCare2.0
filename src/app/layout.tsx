import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Prime Care Group — Residential & Nursing Care, South London',
    template: '%s | Prime Care Group',
  },
  description:
    "Prime Care Group provides exceptional residential and nursing care with a truly personal touch across two care homes in South London. Discover St John's and Gibson's Lodge Nursing Homes.",
  keywords: [
    'nursing home', 'residential care', 'dementia care', 'South Croydon', 'South London',
    'care home', 'nursing care', 'Prime Care Group', 'St Johns Nursing Home', 'Gibsons Lodge',
  ],
  authors: [{ name: 'Prime Care Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.primecaregroup.co.uk',
    siteName: 'Prime Care Group',
    title: 'Prime Care Group — Residential & Nursing Care',
    description: 'Residential and nursing care with a truly personal touch across South London.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
