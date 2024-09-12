import '@/styles/globals.scss'
import './blog-layout.scss'
import styles from './layout.module.scss'
import { emojiFont, monospaceFont, serifFont } from '@/styles/fonts'
import type { Metadata } from 'next'
import NavigationBar from '@/components/blog/NavigationBar'
import classNames from 'classnames'
import { getPageTitleName } from '@/utils/blog/page'
import BlogFooter from '@/components/blog/BlogFooter'

export const metadata: Metadata = {
  title: getPageTitleName(),
  description:
    'JavaScript/TypeScript를 다루며, 컴퓨터를 다루며 배우게 된 점, 느끼게 된 점을 나누고 싶습니다.',
  icons: '/favicon.svg',
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
