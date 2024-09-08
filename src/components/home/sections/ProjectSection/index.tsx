import styles from './styles.module.scss'
import SectionTitle from '../SectionTitle'
import Link from 'next/link'

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <SectionTitle>My projects</SectionTitle>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Random seat picker</th>
            <td>
              <Link href="https://seat.pyj-pd.dev">Try it yourself</Link>
            </td>
            <td>sdfsdf</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
