import type { Metadata } from 'next'
import '@/styles/globals.scss'
import BackgroundTexture from '@/components/home/BackgroundTexture'
import Navbar from '@/components/home/Navbar'
import styles from './layout.module.scss'
import classNames from 'classnames'
import { archivoFont } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(styles.container, archivoFont.className)}>
        <Navbar />
        <BackgroundTexture />
        {children}
      </body>
    </html>
  )
}
