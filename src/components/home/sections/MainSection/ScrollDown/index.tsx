'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import ScrollDownText from './ScrollDownText'
import styles from './styles.module.scss'

/**
 * The lower, the faster. Vice versa.
 */
const SECONDS_PER_PIXEL = 0.002

export default function ScrollDown() {
  const scrollDownTextRef = useRef<HTMLDivElement>(null),
    scrollDownTextWidth = useRef<number | null>(null)

  /**
   * How many scroll text elements are rendered
   */
  const [textNumber, setTextNumber] = useState<number>(0),
    [scrollDuration, setScrollDuration] = useState<number>(0)

  // Get text width before rendering
  useLayoutEffect(() => {
    if (scrollDownTextRef.current === null) return

    scrollDownTextWidth.current = scrollDownTextRef.current.clientWidth

    calculateHowManyTexts()
  }, [])

  const calculateHowManyTexts = () => {
    if (scrollDownTextWidth.current === null) return

    const { innerWidth } = window

    const number = Math.floor(innerWidth / scrollDownTextWidth.current) * 2 + 1,
      duration =
        (number +
          1) /* Add one because there is one more element that is not included in the loop */ *
        scrollDownTextWidth.current *
        SECONDS_PER_PIXEL

    setTextNumber(number)
    setScrollDuration(duration)
  }

  useEffect(() => {
    window.addEventListener('resize', calculateHowManyTexts)

    return () => window.removeEventListener('resize', calculateHowManyTexts)
  }, [])

  return (
    <div className={styles['scroll-down-container']}>
      <div
        className={styles['animation-area']}
        style={{ '--duration': `${scrollDuration}s` } as CSSProperties}
      >
        <ScrollDownText ref={scrollDownTextRef} />
        {[...Array(textNumber)].map((_, index) => (
          <ScrollDownText key={index} />
        ))}
      </div>
    </div>
  )
}
