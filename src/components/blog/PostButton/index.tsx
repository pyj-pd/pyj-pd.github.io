import type { PostData } from '@/types/post'
import styles from './styles.module.scss'
import { categoryList } from '@/constants/blog/categories'
import { getPostURL } from '@/utils/blog/post'
import MyLink from '@/components/common/MyLink'
import { getPostDateString } from '@/utils/blog/post-info'

type PostButtonProps = { postData: PostData }

/** @todo add thumbnail */
export default function PostButton({ postData }: PostButtonProps) {
  return (
    <li className={styles['list-container']}>
      <article className={styles.container}>
        <div className={styles['content-container']}>
          <div className={styles['title-container']}>
            <h3>{postData.title}</h3>
            {postData.description && <p>{postData.description}</p>}
          </div>
          <div className={styles['info-container']}>
            <div className={styles['time-container']}>
              {postData.date && (
                <time dateTime={postData.date}>
                  {getPostDateString(postData.date)}
                </time>
              )}
            </div>
            <div className={styles['category-container']}>
              {/** @todo support multiple categories in style */}
              {postData.categories.map((categoryId, index) => (
                <span
                  className={styles.category}
                  key={index}
                >
                  #{categoryList[categoryId].name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <MyLink
          href={getPostURL(postData.slug)}
          tabIndex={-1}
          className={styles['link-wrapper']}
        >
          <button
            className={styles['side-button-container']}
            aria-label="해당 글로 이동"
          >
            <span className={styles['right-arrow']} />
          </button>
        </MyLink>
      </article>
    </li>
  )
}
