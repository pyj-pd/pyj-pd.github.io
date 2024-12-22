import './layout.scss'
import { monospaceFont, sansSerifFont } from '@/styles/fonts'
import type { Metadata } from 'next'
import NavigationBar from '@/components/blog/NavigationBar'
import classNames from 'classnames'
import {
  HOMEPAGE_DESCRIPTION,
  HOMEPAGE_TITLE_DESCRIPTION,
  sharedMetadata,
} from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: getPageTitleName(HOMEPAGE_TITLE_DESCRIPTION),
  description: HOMEPAGE_DESCRIPTION,
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
          // Fonts
          sansSerifFont.variable,
          monospaceFont.variable,
        )}
      >
        <NavigationBar />
        {children}
        {/* <BlogFooter /> */}
      </body>
    </html>
  )
}
