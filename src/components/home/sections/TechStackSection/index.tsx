import { techStackList } from '@/constants/techstack'
import SectionTitle from '../SectionTitle'
import styles from './styles.module.scss'

export default function TechStackSection() {
  return (
    <section className={styles.container}>
      <SectionTitle>I am capable of using...</SectionTitle>
      <div className={styles['tech-stack-container']}>
        {techStackList.map((techStackCategory, categoryIndex) => (
          <ul
            className={styles['list-container']}
            key={categoryIndex}
          >
            {techStackCategory.map((techStackItem, itemIndex) => (
              <li key={`${categoryIndex},${itemIndex}`}>
                <b>{techStackItem.name}</b>
                {techStackItem.description && (
                  <>
                    <br />
                    <p>{techStackItem.description}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
