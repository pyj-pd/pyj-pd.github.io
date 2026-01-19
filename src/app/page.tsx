import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import LandingSection from '@/components/home/LandingSection'
import PostListSection from '@/components/home/PostListSection'
import { navbarRouteList } from '@/constants/routes'
import TechStackSection from '@/components/home/TechStackSection'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(navbarRouteList['home'].path),
}

export default function HomePage() {
  return (
    <main className={styles.container}>
      <LandingSection />
      <TechStackSection />
      <PostListSection />
    </main>
  )
}
