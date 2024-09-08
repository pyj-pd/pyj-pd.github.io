import '@/styles/globals.scss'
import './blog-layout.scss'
import styles from './layout.module.scss'
import { serifFont } from '@/styles/fonts'
import type { Metadata } from 'next'
import NavigationBar from '@/components/blog/NavigationBar'
import classNames from 'classnames'

export const metadata: Metadata = {
  title: 'pyj-pd',
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
      <body className={classNames(styles.container, serifFont.className)}>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
