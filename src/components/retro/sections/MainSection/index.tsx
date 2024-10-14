import styles from './styles.module.scss'
import HyperLinkGroup from './HyperLinkGroup'
import IntroduceMyself from './IntroduceMyself'
import WelcomeText from './WelcomeText'
import Image from 'next/image'
import thanksGif from '@public/assets/retro/thanks.gif'
import MarqueeContent from '../../MarqueeContent'

export default function MainSection() {
  return (
    <section className={styles.container}>
      <WelcomeText />
      <IntroduceMyself />
      <MarqueeContent>
        <p className={styles['marquee-text']}>
          Have a great time on my website!
        </p>
      </MarqueeContent>
      <HyperLinkGroup />
      <span className={styles.break} />
      <Image
        src={thanksGif}
        className={styles['thanks-image']}
        unoptimized
        alt="Thanks for visiting!"
      />
    </section>
  )
}
