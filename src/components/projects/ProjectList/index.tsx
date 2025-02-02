import { projectList } from '@/constants/home/project'
import ProjectItem from './ProjectItem'
import styles from './styles.module.scss'

export default function ProjectList() {
  return (
    <ul className={styles.container}>
      {projectList.map((projectData, index) => (
        <ProjectItem
          key={index}
          data={projectData}
          align={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </ul>
  )
}
