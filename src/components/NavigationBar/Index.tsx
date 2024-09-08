'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import { navbarRouteList } from '@/constants/navbar'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className={styles.container}>
      <ul className={styles['link-list']}>
        {navbarRouteList.map((route, index) => (
          <li key={index}>
            {pathname === route.path ? (
              // Current path
              `[${route.name}]`
            ) : (
              // Other paths
              <Link href={route.path}>[{route.name}]</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
