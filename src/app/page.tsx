import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
}

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to my page,</h1>
    </div>
  )
}
