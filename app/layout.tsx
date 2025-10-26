import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: `Concrete Guys – Concrete in Nashville, TN`,
  description: `Expert Concrete services in Nashville, TN. Get professional concrete services with exceptional attention to detail.. Schedule your free quote: 615-300-6767.`,
  keywords: 'Concrete, Nashville, TN, Concrete Driveways, Concrete Patios, Sidewalk Installation, Foundation Work, Concrete Repair',
  authors: [{ name: `Concrete Guys` }],
  openGraph: {
    title: `Concrete Guys – Concrete in Nashville, TN`,
    description: `Expert Concrete services in Nashville, TN. Get professional concrete services with exceptional attention to detail.. Schedule your free quote: 615-300-6767.`,
    type: 'website',
    locale: 'en_US',
    siteName: `Concrete Guys`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Concrete Guys – Concrete in Nashville, TN`,
    description: `Expert Concrete services in Nashville, TN. Get professional concrete services with exceptional attention to detail.. Schedule your free quote: 615-300-6767.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700&family=Montserrat:wght@400;600;700&family=Oswald:wght@400;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Lato:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: `'Inter', 'Helvetica Neue', sans-serif` }}>
        {children}
      </body>
    </html>
  )
}
