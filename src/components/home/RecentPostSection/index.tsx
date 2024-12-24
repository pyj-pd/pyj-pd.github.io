import { getPostList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'

const POSTS_NUMBER = 5

export default async function RecentPostSection() {
  const postList = await getPostList(),
  recentPostList = postList.slice(0, POSTS_NUMBER)

  return (
    <section className={styles.container}>
      <PostListTitle
        type="h2"
        showViewAllButton
      >
        최신 글
      </PostListTitle>
      <PostList postDataList={recentPostList} />
    </section>
  )
}
