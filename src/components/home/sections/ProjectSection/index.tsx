import styles from './styles.module.scss'
import { projectList } from '@/constants/section-data/project'
import SectionTitle from '../../SectionTitle'
import ProjectItem from './ProjectItem'

export default function ProjectSection() {
  return (
    <section className={styles['project-section']}>
      <SectionTitle>Projects</SectionTitle>
      <div className={styles['project-list-container']}>
        <div className={styles['project-list']}>
          {projectList.map((project, index) => (
            <ProjectItem
              key={index}
              data={project}
              alignToRight={index % 2 !== 0} // Items of odd indexes will be aligned to right
            />
          ))}
        </div>
      </div>
    </section>
  )
}
