import WelcomeText from '@/components/home/WelcomeText'
import styles from './home.module.scss'
import IntroduceMyself from '@/components/home/IntroduceMyself'
import HyperLinkGroup from '@/components/home/HyperLinkGroup'
import ThanksBanner from '@/components/home/ThanksBanner'
import UnderConstruction from '@/components/home/UnderConstruction'
import TechStackSection from '@/components/home/sections/TechStackSection'

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <WelcomeText />
      <IntroduceMyself />
      <UnderConstruction />
      <HyperLinkGroup />
      <span className={styles.break} />
      <ThanksBanner />
      <span className={styles.break} />
      <TechStackSection />
    </main>
  )
}
