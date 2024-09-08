import Image from 'next/image'
import styles from '../styles.module.scss'
import Link from 'next/link'

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
      target="_blank"
      tabIndex={-1}
    >
      <button className={styles['button-container']}>
        <span className={styles['button-label']}>{children}</span>
        <Image
          src="/assets/retro/oval-button.webp"
          width={120}
          height={70}
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
