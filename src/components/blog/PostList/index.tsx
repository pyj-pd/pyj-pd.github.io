import type { PostData } from '@/types/post'
import PostButton from '../PostButton'
import styles from './styles.module.scss'

type MorePostsProps = {
  postDataList: PostData[]
}

export default function PostList({ postDataList }: MorePostsProps) {
  return (
    <ol className={styles.container}>
      {postDataList.map((postData, index) => (
        <PostButton
          key={index}
          postData={postData}
        />
      ))}
    </ol>
  )
}
