import classNames from 'classnames'
import styles from './styles.module.scss'
import type { ReactNode } from 'react'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

type CalloutType = 'normal' | 'info' | 'okay' | 'warn' | 'error'

type CalloutTitle = {
  emoji: string | null
  title: string | null
}

type MDXCalloutProps = Partial<CalloutTitle> & {
  type: CalloutType

  children: ReactNode
}

const calloutTitles: { [key in CalloutType]: CalloutTitle } = {
  normal: {
    emoji: '🗣️',
    title: locales[DEFAULT_LANGUAGE].calloutTitles.normal,
  },
  info: {
    emoji: '📌',
    title: locales[DEFAULT_LANGUAGE].calloutTitles.info,
  },
  okay: {
    emoji: '🏆',
    title: locales[DEFAULT_LANGUAGE].calloutTitles.okay,
  },
  warn: {
    emoji: '⚠️',
    title: locales[DEFAULT_LANGUAGE].calloutTitles.warn,
  },
  error: {
    emoji: '🚨',
    title: locales[DEFAULT_LANGUAGE].calloutTitles.error,
  },
}

export default function MDXCallout({
  type = 'normal',

  emoji,
  title,

  children,
}: MDXCalloutProps) {
  const defaultTitleData = calloutTitles[type]

  const titleEmoji = emoji ?? defaultTitleData.emoji,
    titleString = title ?? defaultTitleData.title

  return (
    <div
      className={classNames(styles.container, styles[type])}
      role="note"
    >
      <div className={styles['content-container']}>
        <h4 className={styles.title}>
          {titleEmoji} {titleString}
        </h4>
        <div>{children}</div>
      </div>
    </div>
  )
}
