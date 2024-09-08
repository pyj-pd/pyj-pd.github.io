import WelcomeText from '@/components/retro/WelcomeText'
import styles from './home.module.scss'
import IntroduceMyself from '@/components/retro/IntroduceMyself'
import HyperLinkGroup from '@/components/retro/HyperLinkGroup'
import ThanksBanner from '@/components/retro/ThanksBanner'
import UnderConstruction from '@/components/retro/UnderConstruction'

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