import PageTitle from '@/components/common/PageTitle'
import styles from './styles.module.scss'
import { projectList } from '@/constants/home/project'
import Image from 'next/image'
import MyLink from '@/components/common/MyLink'

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <PageTitle headingType="h2">프로젝트</PageTitle>
      <p>스크린샷 이미지를 클릭하여 해당 프로젝트에 대해 더 알아보세요.</p>
      <ul className={styles['project-container']}>
        {projectList.map((projectItem, index) => (
          <li key={index}>
            <MyLink
              href={`/projects#${projectItem.id}`}
              className={styles['project-image-link']}
            >
              <Image
                src={projectItem.image}
                alt={`${projectItem.title} 프로젝트 스크린샷`}
                height={200}
              />
            </MyLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
