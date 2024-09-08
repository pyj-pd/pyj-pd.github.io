import SectionTitle from '@/components/retro/SectionTitle'
import styles from './styles.module.scss'
import UnderConstructionImage from '@/components/retro/UnderConstructionImage'

export default function ProjectPage() {
  return (
    <main className={styles.container}>
      <SectionTitle>My projects</SectionTitle>
      <UnderConstructionImage />
    </main>
  )
}
