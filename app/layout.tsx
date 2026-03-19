import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cognify - AI Powered Productivity Suite',
  description: 'Supercharge your team\'s productivity with Cognify, an all-in-one platform combining AI tools and project management for modern teams.',
  generator: 'cognify-team',
  icons: {
    icon: [
      {
        url: '/logoV2.JPG',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logoV2.JPG',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'logoV2.JPG',
        type: 'image/svg+xml',
        sizes: '80x80',
      },
    ],
    apple: '/cognifylogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
