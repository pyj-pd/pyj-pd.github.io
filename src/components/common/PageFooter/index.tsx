import { footerLinks } from '@/constants/routes'
import styles from './styles.module.scss'
import NormalLink from '../NormalLink'
import { COPYRIGHT_DISCLAIMER, SITE_NAME } from '@/constants/info'
import siteIcon from '@/app/icon.svg'
import Image from 'next/image'

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles['end-of-page-container']}>
        <p>END OF PAGE</p>
        <a href="#">맨 위로</a>
      </div>
      <div className={styles['info-container']}>
        <div className={styles['site-info-container']}>
          <Image
            src={siteIcon}
            alt="사이트 아이콘"
            width={48}
            height={48}
          />
          <span className={styles['site-name']}>{SITE_NAME}</span>
          <span>{COPYRIGHT_DISCLAIMER}</span>
        </div>
        <ul className={styles['link-category-container']}>
          {footerLinks.map((linkCategory) => (
            <li
              key={linkCategory.categoryName}
              className={styles['category-container']}
            >
              <span className={styles['link-category-name']}>
                {linkCategory.categoryName}
              </span>
              <ul className={styles['category-items-container']}>
                {linkCategory.links.map((link) => (
                  <li key={link.url}>
                    <NormalLink
                      href={link.url}
                      target={
                        linkCategory.openInExternal ? '_blank' : undefined
                      }
                    >
                      {link.name}
                    </NormalLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
