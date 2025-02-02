import PageTitle from '@/components/common/PageTitle'
import styles from './page.module.scss'
import ProjectList from '@/components/projects/ProjectList'

export default function ProjectsPage() {
  return (
    <main className={styles.container}>
      <PageTitle>프로젝트</PageTitle>
      <ProjectList />
    </main>
  )
}
