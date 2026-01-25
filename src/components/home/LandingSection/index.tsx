import GitHubIcon from '@/components/icons/GitHubIcon'
import styles from './styles.module.scss'
import NormalLink from '@/components/common/NormalLink'
import { GITHUB_PROFILE_LINK, HOMEPAGE_DESCRIPTION } from '@/constants/info'
import Image from 'next/image'
import waveImage from '@public/assets/home/wave.webp'

export default function LandingSection() {
  return (
    <section className={styles.container}>
      <div className={styles['image-container']}>
        <div className={styles.image}>
          <Image
            src={waveImage}
            alt="눈이 쌓인 산이 보이고 그 아래 물이 잔잔하게 흐른다."
            fill
          />
        </div>
      </div>
      <div className={styles['content-container']}>
        <div className={styles['text-container']}>
          <h1>pyj-pd</h1>
          <p>{HOMEPAGE_DESCRIPTION}</p>
        </div>
        <div className={styles['link-container']}>
          <NormalLink
            href={GITHUB_PROFILE_LINK}
            aria-label="GitHub"
            target="_blank"
          >
            <GitHubIcon />
          </NormalLink>
        </div>
      </div>
    </section>
  )
}
