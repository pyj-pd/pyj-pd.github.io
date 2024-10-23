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
          Welcome to my website! I am PYJ.
          <br />I am a student focusing on frontend development,
          <br />
          enrolled in high school.
        </p>
      </div>
    </div>
  )
}
