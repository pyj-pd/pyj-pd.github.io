import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { msFont } from '@/styles/fonts'

export const metadata: Metadata = {
  title: "PYJ's Homepage",
  description: 'Hello! I am a student learning frontend development.',
  icons: '/favicon.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={msFont.className}>{children}</body>
    </html>
  )
}
