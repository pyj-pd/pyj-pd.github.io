import { archivoFont, tiny5Font } from '@/styles/fonts'
import styles from './styles.module.scss'
import ScrollDown from './ScrollDown'
import WipeText from './WipeText'
import classNames from 'classnames'

export default function MainSection() {
  return (
    <section className={styles['main-section']}>
      <div
        className={classNames(archivoFont.className, styles['text-container'])}
      >
        <WipeText index={0}>Hello, I am a student</WipeText>
        <WipeText index={1}>focusing on</WipeText>
        <WipeText index={2}>
          <span className={styles['highlighted-text']}>
            frontend development
          </span>
          .
        </WipeText>
        <WipeText index={3}>I am currently located in</WipeText>
        <WipeText index={4}>
          <span className={tiny5Font.className}>South Korea</span>,
        </WipeText>
        <WipeText index={5}>enrolled in high school.</WipeText>
      </div>
      <ScrollDown />
    </section>
  )
}
