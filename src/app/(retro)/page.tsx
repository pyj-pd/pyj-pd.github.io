import styles from './home.module.scss'
import type { Metadata } from 'next'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import MainSection from '@/components/retro/sections/MainSection'
import TechStackSection from '@/components/retro/sections/TechStackSection'
import ProjectSection from '@/components/retro/sections/ProjectSection'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('home'),
}

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <MainSection />
      <TechStackSection />
      <ProjectSection />
    </main>
  )
}
