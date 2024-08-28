import Navbar from '@/components/home/Navbar'
import styles from './home.module.scss'
import MainSection from '@/components/home/sections/MainSection'
import TechStackSection from '@/components/home/sections/TechStackSection'
import ProjectSection from '@/components/home/sections/ProjectSection'
import BackgroundTexture from '@/components/home/BackgroundTexture'

/** @todo add responsive design support */
export default function Home() {
  return (
    <main className={styles['main-container']}>
      {/* Layouts */}
      <Navbar />
      <BackgroundTexture />

      {/* Sections */}
      <MainSection />
      <TechStackSection />
      <ProjectSection />
    </main>
  )
}
