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
                  <MyLink href={route.path}>
                    <button tabIndex={-1}>{route.name}</button>
                  </MyLink>
                </li>
                {index < routeIds.length - 1 && (
                  <span className={styles.separator} />
                )}
              </Fragment>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
