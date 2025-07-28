import { getPostList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'

const POSTS_NUMBER = 5

export default async function PostListSection() {
  const postList = await getPostList()

  return (
    <section className={styles.container}>
      <PostListTitle
        type="h2"
        id="posts"
      >
        전체 글 목록
      </PostListTitle>
      <PostList postDataList={postList} />
    </section>
  )
}
