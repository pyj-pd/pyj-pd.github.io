import styles from './layout.module.scss'
import './retro-layout.scss'
import '@/styles/globals.scss'
import { serifFont } from '@/styles/fonts'
import classNames from 'classnames'
import NavigationBar from '@/components/retro/NavigationBar/Index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "PYJ's Homepage",
  description: 'Hello! I am a student learning frontend development.',
  icons: '/favicon.svg',
}

export default function RetroRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(styles.container, serifFont.className)}>
        <NavigationBar />
        <div className={styles['content-container']}>{children}</div>
      </body>
    </html>
  )
}
