import Image from 'next/image'
import styles from '../styles.module.scss'
import classNames from 'classnames'
import { react95Font } from '@/styles/fonts'
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
        <span
          className={classNames(styles['button-label'], react95Font.className)}
        >
          {children}
        </span>
        <Image
          src="/assets/oval-button.webp"
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
