import NormalLink from '@/components/common/NormalLink'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { internalRoutesList } from '@/constants/routes'
import { HiArrowRight } from 'react-icons/hi'

type PostListTitleProps = {
  type: 'h1' | 'h2'
  showViewAllButton?: boolean

  id?: string
  children: string
}

const postListPageUrl = internalRoutesList['posts'].path

export default function PostListTitle({
  type,
  showViewAllButton = false,

  id,
  children,
}: PostListTitleProps) {
  return (
    <div
      className={classNames(styles.container, styles[type])}
      id={id}
    >
      {type === 'h1' ? <h1>{children}</h1> : <h2>{children}</h2>}
      {showViewAllButton && (
        <NormalLink
          href={postListPageUrl}
          className={styles['more-post-link']}
        >
          전체 글 보기
          <HiArrowRight className={styles.arrow} />
        </NormalLink>
      )}
    </div>
  )
}
