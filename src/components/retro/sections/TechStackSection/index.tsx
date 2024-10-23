import styles from './styles.module.scss'
import SectionTitle from '../../SectionTitle'
import { techStackList } from '@/constants/retro/techstack'

export default function TechStackSection() {
  return (
    <section className={styles.container}>
      <SectionTitle>Tech Stacks</SectionTitle>
      <ul className={styles['list-container']}>
        {techStackList.map((techStackCategory, categoryIndex) => (
          <li key={categoryIndex}>
            {techStackCategory.categoryTitle}
            <ul>
              {techStackCategory.items.map((techStackItem, itemIndex) => (
                <li
                  key={`${categoryIndex},${itemIndex}`}
                  className={styles['tech-stack-item']}
                >
                  <h3>{techStackItem.name}</h3>
                  <p>{techStackItem.description}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
