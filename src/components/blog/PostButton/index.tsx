import type { PostData } from '@/types/post'
import Link from 'next/link'
import styles from './styles.module.scss'
import { categoryList } from '@/constants/blog/categories'

type PostButtonProps = { postData: PostData }

/** @todo add thumbnail */
export default function PostButton({ postData }: PostButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <div className={styles['post-info-container']}>
          <h3>{postData.title}</h3>
          {postData.description && <p>{postData.description}</p>}
        </div>
        <div className={styles['category-container']}>
          {/** @todo support multiple categories in style */}
          {postData.categories.map((categoryId, index) => (
            <span
              className={styles.category}
              key={index}
            >
              {categoryList[categoryId].name}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/posts/${postData.slug}`}
        tabIndex={-1}
        className={styles['link-wrapper']}
      >
        <button
          className={styles['side-button-container']}
          aria-label="해당 글로 이동"
        >
          <span className={styles['right-arrow']} />
        </button>
      </Link>
    </div>
  )
}
