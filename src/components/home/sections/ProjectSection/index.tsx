import { projectList } from '@/constants/section-data/project'
import SectionTitle from '../../SectionTitle'

export default function ProjectSection() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      {projectList.map((project, index) => (
        <div key={index}>{JSON.stringify(project)}</div>
      ))}
    </section>
  )
}
