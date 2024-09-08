import SectionTitle from '@/components/retro/SectionTitle'
import styles from './styles.module.scss'
import { techStackList } from '@/constants/techstack'

export default function TechStackPage() {
  return (
    <main className={styles.container}>
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
    </main>
  )
}
