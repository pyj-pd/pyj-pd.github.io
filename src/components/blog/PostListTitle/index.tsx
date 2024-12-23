import MyLink from '@/components/common/MyLink'
import styles from './styles.module.scss'
import classNames from 'classnames'

type PostListTitleProps = {
  type: 'h1' | 'h2'
  showViewAllButton?: boolean

  children: string
}

export default function PostListTitle({
  type,
  showViewAllButton = false,
  children,
}: PostListTitleProps) {
  return (
    <div className={classNames(styles.container, styles[type])}>
      {type === 'h1' ? <h1>{children}</h1> : <h2>{children}</h2>}
      {showViewAllButton && <MyLink href="/posts">전체 글 보기</MyLink>}
    </div>
  )
}
