import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'
import { getPostAssetsPath } from '@/utils/blog/post'
import classNames from 'classnames'

type MDXImageProps = ComponentPropsWithoutRef<typeof Image> & {
  slug: string
}

export default function MDXImage({ slug, ...props }: MDXImageProps) {
  if (typeof props.src !== 'string')
    throw new Error('Source of images in MDX should be string.')

  const imageSourcePath = getPostAssetsPath(slug, props.src)

  return (
    <div className={classNames(styles.container, 'no-padding')}>
      <a
        aria-label="Click to view original image"
        href={imageSourcePath}
        target="_blank"
        className={styles['image-container']}
      >
        <Image
          {...props}
          src={imageSourcePath}
          width={Number(props.width)}
          height={Number(props.height)}
          alt={props.alt}
          className={styles.image}
        />
      </a>
    </div>
  )
}
