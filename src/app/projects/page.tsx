import SectionTitle from '@/components/SectionTitle'
import styles from './styles.module.scss'
import UnderConstructionImage from '@/components/UnderConstructionImage'

export default function ProjectPage() {
  return (
    <main className={styles.container}>
      <SectionTitle>My projects</SectionTitle>
      <UnderConstructionImage />
    </main>
  )
}
