import PageTitle from '@/components/common/PageTitle'
import { navbarRouteList } from '@/constants/routes'
import { getPageTitleName } from '@/utils/blog/page'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import { projectList } from '@/constants/home/project'
import MyLink from '@/components/common/MyLink'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { techStackColors } from '@/constants/home/techstack'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(navbarRouteList['portfolio'].path),
  title: getPageTitleName('포트폴리오'),
}

export default function PortfolioPage() {
  return (
    <main className={styles.container}>
      <PageTitle>포트폴리오</PageTitle>
      <ul className={styles['project-container']}>
        {projectList.map((projectItem, index) => (
          <li
            key={index}
            className={styles['project-item']}
            id={projectItem.id}
          >
            <div className={styles['image-container']}>
              <MyLink
                href={projectItem.image.src}
                className={styles['project-image-link']}
              >
                <Image
                  src={projectItem.image}
                  alt={`${projectItem.title} 프로젝트 스크린샷`}
                  height={200}
                />
              </MyLink>
              <div className={styles['link-container']}>
                {projectItem.githubUrl && (
                  <MyLink
                    href={projectItem.githubUrl}
                    target="_blank"
                  >
                    GitHub 레포지토리
                  </MyLink>
                )}
                {projectItem.projectUrl && (
                  <MyLink
                    href={projectItem.projectUrl}
                    target="_blank"
                  >
                    프로젝트 사이트
                  </MyLink>
                )}
              </div>
            </div>
            <div className={styles['info-container']}>
              <h2>{projectItem.title}</h2>
              <p>{projectItem.description}</p>
              <ul className={styles['techstack-container']}>
                {projectItem.techStacks.map((techStack, index) => (
                  <li
                    key={index}
                    className={styles['techstack-item']}
                    style={
                      {
                        '--background-color':
                          techStackColors[techStack].backgroundColor,
                        '--text-color': techStackColors[techStack].textColor,
                      } as CSSProperties
                    }
                  >
                    {techStack}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
