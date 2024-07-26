import Navbar from '@/components/home/Navbar'
import styles from './home.module.scss'
import MainSection from '@/components/home/sections/MainSection'
import TechStackSection from '@/components/home/sections/TechStackSection'

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <Navbar />
      <MainSection />
      <TechStackSection />
    </main>
  )
}
