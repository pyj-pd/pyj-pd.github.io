import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'
import { type PostMetadata, type PostContentData } from '@/types/post'
import { getPostContentData, getPostImagePath } from '@/utils/post'
import { compileMDX } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const postContentData: PostContentData = await getPostContentData(params.slug)
  const mdxSource = await compileMDX<PostMetadata>({
    source: postContentData.content,
    options: { parseFrontmatter: true },
    components: {
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
    },
  })

  return (
    <div className={styles.container}>
      <main className={styles['content-container']}>
        <PostTitle>{mdxSource.frontmatter.title}</PostTitle>
        {mdxSource.content}
      </main>
    </div>
  )
}
