import Image from 'next/image'
import styles from '../styles.module.scss'
import Link from 'next/link'
import ovalButtonImage from '@public/assets/retro/oval-button.webp'

type HyperLinkButtonProps = {
  /**
   * Hue rotation on degree.
   */
  hueRotate?: number

  url: string
  children: string
}

export default function HyperLinkButton({
  hueRotate,

  url,
  children,
}: HyperLinkButtonProps) {
  return (
    <Link
      href={url}
      tabIndex={-1}
    >
      <button className={styles['button-container']}>
        <span className={styles['button-label']}>{children}</span>
        <Image
          src={ovalButtonImage}
          alt="A sphere."
          priority
          style={
            hueRotate
              ? {
                  filter: `hue-rotate(${hueRotate}deg)`,
                }
              : undefined
          }
        />
      </button>
    </Link>
  )
}
