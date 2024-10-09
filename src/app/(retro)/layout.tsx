import styles from './layout.module.scss'
import './retro-layout.scss'
import '@/styles/globals.scss'
import { serifFont } from '@/styles/fonts'
import classNames from 'classnames'
import NavigationBar from '@/components/retro/NavigationBar/Index'
import type { Metadata } from 'next'
import {
  HOMEPAGE_DESCRIPTION,
  HOMEPAGE_TITLE,
  HOMEPAGE_TITLE_DESCRIPTION,
  sharedMetadata,
  TITLE_SEPARATOR_DASH,
} from '@/constants/metadata'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `${HOMEPAGE_TITLE}${TITLE_SEPARATOR_DASH}${HOMEPAGE_TITLE_DESCRIPTION}`,
  description: HOMEPAGE_DESCRIPTION,
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
