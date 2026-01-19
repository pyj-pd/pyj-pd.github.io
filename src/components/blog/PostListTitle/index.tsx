import MyLink from '@/components/common/MyLink'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { internalRoutesList } from '@/constants/routes'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

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
        <MyLink href={postListPageUrl}>
          {locales[DEFAULT_LANGUAGE].postList.viewAllPosts}
        </MyLink>
      )}
    </div>
  )
}
