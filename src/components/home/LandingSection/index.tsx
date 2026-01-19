import GitHubIcon from '@/components/icons/GitHubIcon'
import styles from './styles.module.scss'
import MyLink from '@/components/common/MyLink'
import { GITHUB_PROFILE_LINK } from '@/constants/project'
import { HOMEPAGE_DESCRIPTION, SITE_NAME } from '@/constants/metadata'
import Image from 'next/image'
import waveImage from '@public/assets/home/wave.webp'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

export default function LandingSection() {
  return (
    <section className={styles.container}>
      <div className={styles['image-container']}>
        <div className={styles.image}>
          <Image
            src={waveImage}
            alt={locales[DEFAULT_LANGUAGE].landingSection.altText}
            fill
            loading="eager"
          />
        </div>
      </div>
      <div className={styles['content-container']}>
        <div className={styles['text-container']}>
          <h1>{SITE_NAME}</h1>
          <p>{HOMEPAGE_DESCRIPTION}</p>
        </div>
        <div className={styles['link-container']}>
          <MyLink
            href={GITHUB_PROFILE_LINK}
            aria-label="GitHub"
            target="_blank"
          >
            <GitHubIcon />
          </MyLink>
        </div>
      </div>
    </section>
  )
}
