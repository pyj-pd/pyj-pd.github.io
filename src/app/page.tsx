import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import LandingSection from '@/components/home/LandingSection'
import RecentPostSection from '@/components/home/RecentPostSection'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('home'),
}

export default function HomePage() {
  return (
    <main className={styles.container}>
      <LandingSection />
      <RecentPostSection />
    </main>
  )
}
