import styles from './styles.module.scss'
import SectionTitle from '../../SectionTitle'
import { projectList } from '@/constants/retro/project'
import Image from 'next/image'
import MyLink from '@/components/common/MyLink'

const TECH_STACK_JOIN_STRING = ', '

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <SectionTitle>Projects</SectionTitle>
      <article className={styles['list-container']}>
        {projectList.map((project, index) => (
          <article
            key={index}
            className={styles['project-item']}
          >
            <figure>
              <Image
                src={project.image}
                alt={`Screenshot of the project ${project.title}`}
                className={styles['project-image']}
              />
              <figcaption className={styles['project-detail-content']}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div>
                  <p className={styles['project-techstacks']}>
                    {project.techStacks.join(TECH_STACK_JOIN_STRING)}
                  </p>
                </div>
                <div>
                  <ul className={styles['project-url-container']}>
                    {project.projectUrl && (
                      <li>
                        <MyLink
                          href={project.projectUrl}
                          target="_blank"
                        >
                          Project
                        </MyLink>
                      </li>
                    )}
                    {project.githubUrl && (
                      <li>
                        <MyLink
                          href={project.githubUrl}
                          target="_blank"
                        >
                          GitHub repository
                        </MyLink>
                      </li>
                    )}
                  </ul>
                </div>
              </figcaption>
            </figure>
          </article>
        ))}
      </article>
    </section>
  )
}
