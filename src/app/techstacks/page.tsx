import styles from './styles.module.scss'
import TechStackSection from '@/components/home/sections/TechStackSection'

export default function TechStackPage() {
  return (
    <main className={styles.container}>
      <TechStackSection />
    </main>
  )
}
