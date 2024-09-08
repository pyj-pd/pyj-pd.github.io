import WelcomeText from '@/components/home/WelcomeText'
import styles from './home.module.scss'
import IntroduceMyself from '@/components/home/IntroduceMyself'
import HyperLinkGroup from '@/components/home/HyperLinkGroup'
import ThanksBanner from '@/components/home/ThanksBanner'
import UnderConstruction from '@/components/home/UnderConstruction'

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <WelcomeText />
      <IntroduceMyself />
      <UnderConstruction />
      <HyperLinkGroup />
      <span className={styles.break} />
      <ThanksBanner />
      <p>This page was updated on...</p>
    </main>
  )
}
