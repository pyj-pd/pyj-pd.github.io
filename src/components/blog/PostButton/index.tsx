import type { PostData } from '@/types/post'
import styles from './styles.module.scss'
import { categoryList } from '@/constants/blog/categories'
import { getPostURL } from '@/utils/blog/post'
import NormalLink from '@/components/common/NormalLink'
import { getPostDateString } from '@/utils/blog/post-info'
import { HiOutlineCalendar, HiOutlineTag } from 'react-icons/hi'

type PostButtonProps = { postData: PostData }

/** @todo add thumbnail */
export default function PostButton({ postData }: PostButtonProps) {
  const postLatestDate = postData.lastUpdateDate ?? postData.date ?? null

  return (
    <li className={styles['list-container']}>
      <NormalLink
        href={getPostURL(postData.slug)}
        className={styles['link-wrapper']}
      >
        <article className={styles.container}>
          <div className={styles['title-container']}>
            <h2 className={styles.title}>{postData.title}</h2>
            <p className={styles.description}>
              {postData.description
                ? postData.description
                : postData.descriptionFromContent}
            </p>
          </div>
          <div className={styles['info-container']}>
            <div className={styles['date-container']}>
              {postLatestDate && (
                <>
                  <HiOutlineCalendar />
                  <time dateTime={postLatestDate}>
                    {getPostDateString(postLatestDate)}
                  </time>
                </>
              )}
            </div>
            <div className={styles['category-container']}>
              {postData.categories.map((categoryId, index) => (
                <div
                  className={styles.category}
                  key={index}
                >
                  <HiOutlineTag />
                  <span>{categoryList[categoryId].name}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </NormalLink>
    </li>
  )
}
