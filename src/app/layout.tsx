import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Background from '../app/background/page';

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MapLibs',
  description: 'Living archive of Bronzeville, Chicago',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
          <Background />
          {children}
      </body>
    </html>
  )
}
