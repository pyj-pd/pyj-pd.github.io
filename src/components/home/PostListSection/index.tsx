import { getPostList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'

const POSTS_NUMBER = 5

export default async function PostListSection() {
  const postList = (await getPostList()).slice(0, POSTS_NUMBER)

  return (
    <section className={styles.container}>
      <PostListTitle
        type="h2"
        id="posts"
        showViewAllButton={true}
      >
        최근 게시물
      </PostListTitle>
      <PostList postDataList={postList} />
    </section>
  )
}
