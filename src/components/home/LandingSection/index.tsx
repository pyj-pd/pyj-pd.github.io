import GitHubIcon from '@/components/icons/GitHubIcon'
import styles from './styles.module.scss'
import MyLink from '@/components/common/MyLink'
import { GITHUB_PROFILE_LINK } from '@/constants/project'
import { HOMEPAGE_DESCRIPTION } from '@/constants/metadata'

export default function LandingSection() {
  return (
    <section className={styles.container}>
      <div className={styles['video-container']}>
        <video
          width="1920"
          height="1080"
          autoPlay
          loop
          className={styles.video}
          controls={false}
          disablePictureInPicture
          tabIndex={-1}
          muted
        >
          <source
            src="/assets/home/wave.mp4"
            type="video/mp4"
          />
          눈이 쌓인 산이 보이고 그 아래 물이 잔잔하게 흐른다.
        </video>
      </div>
      <div className={styles['content-container']}>
        <div className={styles['text-container']}>
          <h1>pyj-pd</h1>
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
