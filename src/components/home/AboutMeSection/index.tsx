import PageTitle from '@/components/common/PageTitle'
import styles from './styles.module.scss'
import NormalLink from '@/components/common/NormalLink'
import { BLOG_REPOSITORY_LINK } from '@/constants/project'

export default function AboutMeSection() {
  return (
    <section className={styles.container}>
      <PageTitle headingType="h2">About me</PageTitle>
      <div className={styles['text-container']}>
        <p>
          수년 전 도서관에서 우연히 발견한 웹 개발 입문서를 시작으로 프론트엔드
          개발에 흥미를 느껴 지금까지 관련 분야를 탐구해오고 있습니다. 비록 웹
          개발이 아니더라도 컴퓨터 소프트웨어와 관련된 것이라면 흥미를 두고
          있습니다.
        </p>
        <p>
          이 블로그에서는 제가 컴퓨터를 사용해오며 발견한 것, 알게 된 것,
          공유하고 싶은 것들을 글을 통해 기록할 예정입니다. 이 블로그는
          오픈소스로,{' '}
          <NormalLink
            href={BLOG_REPOSITORY_LINK}
            target="_blank"
          >
            GitHub 레포지토리
          </NormalLink>
          에서 코드를 공유하고 있으므로 관심있으신 분들께서는 둘러보시는 것도
          추천드립니다.
        </p>
      </div>
    </section>
  )
}
