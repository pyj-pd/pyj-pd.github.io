import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import LandingSection from '@/components/home/LandingSection'
import PostListSection from '@/components/home/PostListSection'
import { navbarRouteList } from '@/constants/routes'
import TechStackSection from '@/components/home/TechStackSection'
import AboutMeSection from '@/components/home/AboutMeSection'
import { getWebSiteJSONLDScript } from '@/utils/seo'
import { joinUrlPaths } from '@/utils/url'
import { SITE_URL } from '@/constants/info'

const canonicalUrl = joinUrlPaths(SITE_URL, navbarRouteList['home'].path)

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(canonicalUrl),
}

export default function HomePage() {
  const { JSONLDScript } = getWebSiteJSONLDScript(canonicalUrl)

  return (
    <main className={styles.container}>
      {JSONLDScript}
      <LandingSection />
      <AboutMeSection />
      <TechStackSection />
      <PostListSection />
    </main>
  )
}
