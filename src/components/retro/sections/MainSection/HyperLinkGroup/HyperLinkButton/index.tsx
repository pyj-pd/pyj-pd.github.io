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

  openInNewTab?: boolean
}

export default function HyperLinkButton({
  hueRotate,

  url,
  children,

  openInNewTab,
}: HyperLinkButtonProps) {
  return (
    <Link
      href={url}
      tabIndex={-1}
      target={openInNewTab ? '_blank' : undefined}
    >
      <button className={styles.button}>
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
