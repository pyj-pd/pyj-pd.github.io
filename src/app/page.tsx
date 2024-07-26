import Navbar from '@/components/home/Navbar'
import styles from './home.module.scss'
import MainSection from '@/components/home/sections/MainSection'

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <Navbar />
      <MainSection />
    </main>
  )
}
