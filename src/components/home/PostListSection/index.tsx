import { getPostList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

const POSTS_NUMBER = 5

export default async function PostListSection() {
  const postList = await getPostList()

  return (
    <section className={styles.container}>
      <PostListTitle
        type="h2"
        id="posts"
      >
        {locales[DEFAULT_LANGUAGE].postList.viewAllPosts}
      </PostListTitle>
      <PostList postDataList={postList} />
    </section>
  )
}
