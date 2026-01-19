import { externalRoutesList } from '@/constants/routes'
import { DEFAULT_LANGUAGE, locales } from '@/locales'
import styles from './styles.module.scss'

const externalRouteIds = Object.keys(
  externalRoutesList,
) as (keyof typeof externalRoutesList)[]

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <div>
        <p>{locales[DEFAULT_LANGUAGE].footer.endOfPage}</p>
        <a href="#">{locales[DEFAULT_LANGUAGE].footer.backToTop}</a>
      </div>
      <div>
        {externalRouteIds.map((routeId) => {
          const routeData = externalRoutesList[routeId]

          return (
            <a
              key={routeId}
              href={routeData.path}
              target="_blank"
            >
              {routeData.name}
            </a>
          )
        })}
      </div>
    </footer>
  )
}
