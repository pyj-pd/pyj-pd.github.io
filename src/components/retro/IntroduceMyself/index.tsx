import Image from 'next/image'
import styles from './styles.module.scss'

export default function IntroduceMyself() {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/retro/mathstudent.gif"
        unoptimized
        width={100}
        height={100}
        alt="A student lying on the floor while studying with a book. There is also a textbook which 'math' is written on the side next to him."
      />
      <div className={styles['text-container']}>
        <p>Welcome to my website!</p>
        <p>
          Let me introduce myself to you.
          <br />I am a student focusing on frontend development, enrolled in
          high school.
          <br />I am born and living in South Korea.
        </p>
      </div>
    </div>
  )
}
