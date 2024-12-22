import type { PostData } from '@/types/post'
import PostButton from '../PostButton'
import styles from './styles.module.scss'
import classNames from 'classnames'

type MorePostsProps = {
  postDataList: PostData[]
  gap?: 'small' | 'normal'
}

export default function PostList({
  postDataList,
  gap = 'normal',
}: MorePostsProps) {
  return (
    <ol className={classNames(styles.container, styles[gap])}>
      {postDataList.map((postData, index) => (
        <PostButton
          key={index}
          postData={postData}
        />
      ))}
    </ol>
  )
}
