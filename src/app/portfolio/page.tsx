import PageTitle from '@/components/common/PageTitle'
import { navbarRouteList } from '@/constants/routes'
import {
  getCanonicalMetadataFromPath,
  getPageTitleName,
} from '@/utils/metadata'
import type { Metadata } from 'next'
import styles from './page.module.scss'
import { portfolioProjectList } from '@/constants/home/portfolio'
import NormalLink from '@/components/common/NormalLink'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { techStackColors } from '@/constants/home/techstack'
import { joinUrlPaths } from '@/utils/url'
import { SITE_URL } from '@/constants/project'
import { getWebSiteJSONLDScript } from '@/utils/seo'

const canonicalUrl = joinUrlPaths(SITE_URL, navbarRouteList['portfolio'].path)

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(canonicalUrl),
  title: getPageTitleName('포트폴리오'),
}

export default function PortfolioPage() {
  const { JSONLDScript } = getWebSiteJSONLDScript(canonicalUrl)

  return (
    <main className={styles.container}>
      {JSONLDScript}
      <PageTitle>포트폴리오</PageTitle>
      <ul className={styles['project-container']}>
        {portfolioProjectList.map((projectItem, index) => (
          <li
            key={index}
            className={styles['project-item']}
            id={projectItem.id}
          >
            <div className={styles['image-container']}>
              <NormalLink
                href={projectItem.image.src}
                className={styles['project-image-link']}
              >
                <Image
                  src={projectItem.image}
                  alt={`${projectItem.title} 프로젝트 스크린샷`}
                  height={200}
                />
              </NormalLink>
              <div className={styles['link-container']}>
                {projectItem.githubUrl && (
                  <NormalLink
                    href={projectItem.githubUrl}
                    target="_blank"
                  >
                    GitHub 레포지토리
                  </NormalLink>
                )}
                {projectItem.projectUrl && (
                  <NormalLink
                    href={projectItem.projectUrl}
                    target="_blank"
                  >
                    프로젝트 사이트
                  </NormalLink>
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
