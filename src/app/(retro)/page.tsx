import WelcomeText from '@/components/retro/WelcomeText'
import styles from './home.module.scss'
import IntroduceMyself from '@/components/retro/IntroduceMyself'
import HyperLinkGroup from '@/components/retro/HyperLinkGroup'
import ThanksBanner from '@/components/retro/ThanksBanner'
import HaveAGreatTime from '@/components/retro/HaveAGreatTime'
import type { Metadata } from 'next'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('home'),
}

export default function Home() {
  return (
    <main className={styles['main-container']}>
      <WelcomeText />
      <IntroduceMyself />
      <HaveAGreatTime />
      <HyperLinkGroup />
      <span className={styles.break} />
      <ThanksBanner />
    </main>
  )
}
