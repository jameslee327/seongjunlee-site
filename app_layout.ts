import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seongjun Lee - Strategic Thinker',
  description: 'Exploring business strategy and innovation through research and analysis',
  keywords: 'business strategy, innovation, market analysis, strategic thinking',
  authors: [{ name: 'Seongjun Lee' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}