import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import LandingSection from '@/components/home/LandingSection'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
}

export default function HomePage() {
  return (
    <main className={styles.container}>
      <LandingSection />
    </main>
  )
}
