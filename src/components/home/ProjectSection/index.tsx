import PageTitle from '@/components/common/PageTitle'
import styles from './styles.module.scss'
import { projectList } from '@/constants/home/project'

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <PageTitle headingType="h2">프로젝트</PageTitle>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>{project.title}</div>
        ))}
      </div>
    </section>
  )
}
