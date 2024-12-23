'use client'

import styles from './styles.module.scss'

export default function LandingSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>블로그 제목</h1>
      <p>
        어쩌고저쩌고 블로그 설명드여기 들어갈듯.
        <br />
        허전하니깐 두줄
      </p>
    </section>
  )
}
