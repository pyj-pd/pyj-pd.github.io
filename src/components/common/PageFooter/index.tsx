import { externalRoutesList } from '@/constants/routes'
import styles from './styles.module.scss'

const externalRouteIds = Object.keys(
  externalRoutesList,
) as (keyof typeof externalRoutesList)[]

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <div>
        <p>END OF PAGE</p>
        <a href="#">맨 위로</a>
      </div>
      <div>
        {externalRouteIds.map((routeId) => {
          const routeData = externalRoutesList[routeId]

          return (
            <a
              key={routeId}
              href={routeData.path}
            >
              {routeData.name}
            </a>
          )
        })}
      </div>
    </footer>
  )
}
