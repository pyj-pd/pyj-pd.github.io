import Image from 'next/image'
import styles from './styles.module.scss'
import mathStudentGif from '@public/assets/retro/mathstudent.gif'

export default function IntroduceMyself() {
  return (
    <div className={styles.container}>
      <Image
        src={mathStudentGif}
        unoptimized
        alt="A student lying on the floor while studying with a book. There is also a textbook which 'math' is written on the side next to him."
      />
      <div>
        <p>
          Welcome to my website!
          <br />
          Let me introduce myself to you.
          <br />I am a student focusing on frontend development, enrolled in
          high school.
          <br />I am born and living in South Korea.
        </p>
      </div>
    </div>
  )
}
