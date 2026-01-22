import type { PostData } from '@/types/post'
import PostButton from '../PostButton'
import styles from './styles.module.scss'

type PostListProps = {
  postDataList: PostData[]
}

export default function PostList({ postDataList }: PostListProps) {
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
