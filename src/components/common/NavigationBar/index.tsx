import { internalRoutesList } from '@/constants/routes'
import styles from './styles.module.scss'
import MyLink from '@/components/common/MyLink'
import { Fragment } from 'react'

const routeIds = Object.keys(
  internalRoutesList,
) as (keyof typeof internalRoutesList)[]

export default function NavigationBar() {
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.container}>
        <ul className={styles['list-container']}>
          {routeIds.map((routeId, index) => {
            const route = internalRoutesList[routeId]

            return (
              <Fragment key={index}>
                <li className={styles['route-button']}>
                  <MyLink
                    tabIndex={-1}
                    href={route.path}
                  >
                    <button>{route.name}</button>
                  </MyLink>
                  {index < routeIds.length - 1 && (
                    <span className={styles.separator} />
                  )}
                </li>
              </Fragment>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
