import type { ProjectData } from '@/constants/home/project'
import Image from 'next/image'
import styles from './styles.module.scss'
import classNames from 'classnames'

type ProjectItemProps = {
  data: ProjectData
  align?: 'left' | 'right'
}

export default function ProjectItem({
  data,
  align = 'left',
}: ProjectItemProps) {
  return (
    <li>
      <article
        className={classNames(
          styles.container,
          align === 'right' && styles['align-right'],
        )}
      >
        <Image
          src={data.image}
          alt={`${data.title} 프로젝트 스크린샷`}
          height={200}
          className={styles.image}
        />
        <div className={styles['info-container']}>
          <h2>{data.title}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>
      </article>
    </li>
  )
}
