import '@/styles/globals.scss'
import './blog-layout.scss'
import styles from './layout.module.scss'
import { emojiFont, monospaceFont, serifFont } from '@/styles/fonts'
import type { Metadata } from 'next'
import NavigationBar from '@/components/blog/NavigationBar'
import classNames from 'classnames'
import BlogFooter from '@/components/blog/BlogFooter'
import {
  BLOG_DESCRIPTION,
  BLOG_NAME,
  BLOG_TITLE_DESCRIPTION,
  sharedMetadata,
  TITLE_SEPARATOR_DASH,
} from '@/constants/metadata'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `${BLOG_NAME}${TITLE_SEPARATOR_DASH}${BLOG_TITLE_DESCRIPTION}`,
  description: BLOG_DESCRIPTION,
}

export default function BlogRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={classNames(
          styles.container,

          // Fonts
          serifFont.variable,
          monospaceFont.variable,
          emojiFont.variable,
        )}
      >
        <NavigationBar />
        {children}
        <BlogFooter />
      </body>
    </html>
  )
}
