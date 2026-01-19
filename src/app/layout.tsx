import '@/styles/globals.scss'
import { monospaceFont, sansSerifFont } from '@/styles/fonts'
import type { Metadata } from 'next'
import NavigationBar from '@/components/common/NavigationBar'
import classNames from 'classnames'
import {
  HOMEPAGE_DESCRIPTION,
  HOMEPAGE_TITLE_DESCRIPTION,
  sharedMetadata,
} from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'
import PageFooter from '@/components/common/PageFooter'
import styles from './layout.module.scss'

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
    <html
      lang="ko"
      data-scroll-behavior="smooth"
    >
      <body
        className={classNames(
          // Fonts
          sansSerifFont.variable,
          monospaceFont.variable,
        )}
      >
        <div className={styles['body-container']}>
          <NavigationBar />
          <div className={styles['main-container']}>{children}</div>
        </div>
        <PageFooter />
      </body>
    </html>
  )
}
