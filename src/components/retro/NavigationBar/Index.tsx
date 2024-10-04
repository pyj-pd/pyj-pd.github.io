'use client'

import styles from './styles.module.scss'
import { navbarRouteList } from '@/constants/urls'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import linkIconGif from '@public/assets/retro/link.gif'
import MyLink from '@/components/common/MyLink'

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
              <MyLink
                href={route.path}
                target={route.openInNewTab ? '_blank' : undefined}
              >
                [{route.name}
                {
                  // External link
                  route.openInNewTab && (
                    <Image
                      src={linkIconGif}
                      unoptimized
                      alt="External link"
                    />
                  )
                }
                ]
              </MyLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
