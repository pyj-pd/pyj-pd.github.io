import styles from './styles.module.scss'
import type { PostContentData } from '@/types/post'
import { getPostContentData, getPostImagePath } from '@/utils/post'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const postContentData: PostContentData = await getPostContentData(params.slug)

  return (
    <main>
      <MDXRemote
        source={postContentData.content}
        components={{
          Image: (props) => (
            <Image
              {...props}
              src={getPostImagePath(params.slug, props.src)}
              width={Number(props.width)}
              height={Number(props.height)}
              alt={props.alt}
              className={styles.image}
            />
          ),
        }}
      />
    </main>
  )
}
