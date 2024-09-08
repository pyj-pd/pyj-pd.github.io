'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import { navbarRouteList } from '@/constants/urls'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
              <Link
                href={route.path}
                target={route.openInNewTab ? '_blank' : undefined}
              >
                [{route.name}
                {
                  // External link
                  route.openInNewTab && (
                    <Image
                      src="/assets/link.gif"
                      width={15}
                      height={15}
                      alt="External link"
                    />
                  )
                }
                ]
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
