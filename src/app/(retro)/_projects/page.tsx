import SectionTitle from '@/components/retro/SectionTitle'
import styles from './styles.module.scss'
import UnderConstructionImage from '@/components/retro/UnderConstructionImage'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('projects'),
}

export default function ProjectPage() {
  return (
    <main className={styles.container}>
      <SectionTitle>My projects</SectionTitle>
      <UnderConstructionImage />
    </main>
  )
}
