import { postList } from '@/utils/blog/post'
import Link from 'next/link'

export default async function BlogPostListPage() {
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
