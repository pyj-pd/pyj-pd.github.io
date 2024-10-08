import classNames from 'classnames'
import styles from './styles.module.scss'
import type { ReactNode } from 'react'

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
    title: '알아두기',
  },
  info: {
    emoji: '📌',
    title: '알아두기',
  },
  okay: {
    emoji: '🏆',
    title: '성공',
  },
  warn: {
    emoji: '⚠️',
    title: '주의',
  },
  error: {
    emoji: '🚨',
    title: '오류',
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
    <div className={classNames(styles.container, styles[type])}>
      <div className={styles['content-container']}>
        <h4 className={styles.title}>
          {titleEmoji} {titleString}
        </h4>
        <div>{children}</div>
      </div>
    </div>
  )
}
