import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'
import { getPostAssetsPath } from '@/utils/blog/post'

type MDXImageProps = ComponentPropsWithoutRef<typeof Image> & {
  slug: string
}

export default function MDXImage({ slug, ...props }: MDXImageProps) {
  return (
    <div className={styles['image-container']}>
      <Image
        {...props}
        src={
          typeof props.src === 'string'
            ? getPostAssetsPath(slug, props.src)
            : props.src
        }
        width={Number(props.width)}
        height={Number(props.height)}
        alt={props.alt}
        className={styles.image}
      />
    </div>
  )
}
