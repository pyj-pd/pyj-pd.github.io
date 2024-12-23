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
      <MyLink
        href={getPostURL(postData.slug)}
        className={styles['link-wrapper']}
      >
        <article className={styles.container}>
          <div className={styles['title-container']}>
            <h2 className={styles.title}>{postData.title}</h2>
            {postData.description && <p className={styles.description}>{postData.description}</p>}
          </div>
          <div className={styles['info-container']}>
            <div className={styles['time-container']}>
              {postData.lastUpdateDate && (
                <time dateTime={postData.lastUpdateDate}>
                  {getPostDateString(postData.lastUpdateDate)}
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
        </article>
      </MyLink>
    </li>
  )
}
