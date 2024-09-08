import type { PostData } from '@/types/post'
import { getPostList } from '@/utils/post'
import Link from 'next/link'

export default async function BlogPostListPage() {
  const postList: PostData[] = await getPostList()

  return (
    <main>
      <ul>
        {postList.map((postData, index) => (
          <li key={index}>
            <Link href={`/posts/${postData.slug}`}>{postData.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
