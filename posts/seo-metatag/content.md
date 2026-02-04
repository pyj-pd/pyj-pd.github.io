---
title: 'SEO에 필요한 메타태그 완벽정리'
description: '검색 엔진 최적화(SEO)에 필수적인 meta 태그와 캐노니컬(canonical) 링크, Open Graph, Twitter 태그에 대해 알아봅니다.'

date: '2026-02-04'
categories: ['seo', 'programming']
---

## SEO란?

구글과 같은 검색엔진들은 한정된 자원을 가지고 무한한 웹 세계를 탐색하기 때문에, 모든 웹사이트들을 크롤링할 수 없다. 따라서 검색엔진들은 자체적인 기준과 알고리즘을 통해서 수많은 웹사이트들의 퀄리티를 확인하여 양질의 자료만을 탑재하려고 하는데, 이때 사이트 운영자인 우리 입장에서 해야 하는 것이 바로 검색 엔진 최적화(Search Engine Optimization, SEO)이다.

한마디로 정리하자면, 검색엔진에 잘 노출되기 위해 사이트를 최적화하는 행위를 말한다.

이 글에서는 구글(Google) 검색엔진을 위주로 설명할 예정이다.

### 캐노니컬(Canonical) 링크

```html
<link
  rel="canonical"
  href="https://pyj-pd.dev/"
/>
```

Canonical 링크는 해당 페이지에서 주가 되는 URL을 말한다. 예를 들어, `https://example.com/`, `https://example.com/?id=1`, `https://www.example.com/`과 같이 같은 내용을 담는 페이지들 중에서 main이 되는 페이지의 URL을 뜻한다.

검색 엔진들이 같은(또는 비슷한) 내용의 페이지들을 중복(duplicate)된 페이지로 처리할 수 있기 때문에, 이를 방지하기 위해서 canonical 링크를 설정해줄 필요가 있다.

**잘못된 canonical 링크를 설정할 경우 검색 엔진 알고리즘에 혼란을 줄 수 있고, 적절한 색인(indexing)이 이루어지지 않을 수 있기 때문에 이 값은 정확하게 설정해주어야 한다.**

#### 캐노니컬 링크 설정 시 주의할 점

여기서 주의할 점은, 검색 엔진들은 **URL에서 한 글자라도 다르면 다른 URL로 취급**하기 때문에 적절한 URL을 설정해줄 필요가 있다는 것이다.

한 예로 후행 슬래시(trailing slash)가 있는데, `https://example.com`(마지막에 슬래시(`/`)가 붙지 않은 URL)과 `https://example.com/`(슬래시가 붙은 URL)은 **다른 URL로 간주된다**.

Next.js는 이 [후행 슬래시 옵션](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)을 기본적으로 꺼두기 때문에 GitHub Pages 등에서 호스팅할 때에는 이 옵션을 주의하여 캐노니컬 링크를 적절하게 설정할 필요가 있다. 필자는 이 블로그의 모든 페이지에서 후행 슬래시가 포함된 링크로 캐노니컬 링크를 설정해둔 상태이다.

또, www가 있는 `https://www.example.com/`과 없는 `https://example.com/` 링크도 역시 **다른 URL로 간주**되기 때문에, 적절하게 하나의 URL만을 설정했는지 확인할 필요가 있다.

### `<meta>` 태그

[`<meta>` 태그](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta)는 리다이렉트나 charset, 그리고 우리가 사용할 메타데이터 등의 정보를 저장하는 데 사용되는 태그이다.

SEO에 필요한 설명(description), 사이트 이름 등의 정보를 저장할 때에는 태그 내의 `name` 값과 `content` 값을 변경하여 사용한다.

#### `description`

```html
<meta
  name="description"
  content="사이트 설명을 이곳에 적습니다."
/>
```

`description`은 페이지 설명을 적는 데에 사용한다. 해당 페이지가 어떤 목적의 페이지인지, 어떤 내용을 담고 있는지 등의 설명을 담아야 한다.

<Image src="google-translator.webp" width="1002" height="205" alt="구글 번역기 검색 결과" />

위는 구글에서 구글 번역기를 검색했을 때 표시되는 결과이다. 여기서 사이트 이름 아래에 적힌 저 설명은 다음 코드로 정의돼 있다.

```html
<meta
  name="description"
  content="무료로 제공되는 Google의 서비스는 영어와 100가지 이상의 다른 언어로 단어, 구문, 웹페이지를 즉시 번역합니다."
/>
```

여기서 주의할 점은, 검색엔진이 무조건 이 태그로 설정된 값만을 채택하진 않는다는 것이다. 검색 엔진들은 자체적으로 페이지의 실제 내용과 이 태그에서 설정된 값을 비교해서 더 나은 결과를 검색 결과에 표출한다.

#### `keywords`

```html
<meta
  name="keywords"
  content="키워드1, 키워드2, keyword3"
/>
```

`keywords` 값은 페이지와 관련된 키워드를 정의한다. 콤마(`,`)로 구분하여 다수의 키워드를 정의할 수 있다.

다만, 이 값은 [구글에 의해서는 사용되지 않는다.](https://developers.google.com/search/docs/crawling-indexing/special-tags#:~:text=%3Cmeta%20name%3D%22keywords%22%20content%3D%22%2E%2E%2E%22%3E%20The%20meta%2Dkeyword%20tag%20is%20not%20used%20by%20Google%20Search%2C%20and%20it%20has%20no%20effect%20on%20indexing%20and%20ranking%20at%20all)

#### `robots`, `googlebot`

```html
<meta
  name="robots"
  content="index, follow"
/>
```

```html
<meta
  name="googlebot"
  content="index, follow"
/>
```

`robots` 값으로는 검색 엔진 봇들이 해당 페이지에서 따라야 하는 룰들을 설정할 수 있다. [사용할 수 있는 값들은 이곳에서 확인](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives)할 수 있다. `robots.txt` 파일의 태그 버전이라고 생각하면 편하다. `googlebot`의 경우 구글 검색엔진 봇에 의해서만 사용될 룰을 따로 정할 수 있다.

기본값은 `index, follow`, 즉 봇이 크롤링할 수 있는 상태이기 때문에 특별한 상황이 아니라면 굳이 정의할 필요는 없다.

다만, 검색 엔진 봇이 정말 크롤링하길 원치 않는 페이지의 경우에는 `robots.txt` 파일을 이용하는 편이 좋은데, 그렇지 않고 이 태그의 값을 `noindex`로 설정할 경우 [검색 엔진의 크롤링 예산(crawl budget)을 낭비](https://developers.google.com/crawling/docs/crawl-budget#:~:text=Google%20will%20still%20request%2C%20but%20then%20drop%20the%20page%20when%20it%20sees%20a%20noindex%20meta%20tag%20or%20header%20in%20the%20HTTP%20response%2C%20wasting%20crawling%20time)하게 될 수 있다.

### Open Graph

[Open Graph 프로토콜](https://ogp.me/)은 사이트 정보를 보다 풍부하게(rich) 정의하기 위해 사용한다. 필수는 아니지만, 위에서 소개한 meta 태그와 같이 사용했을 때 시너지 효과를 낼 수 있다.

<Image src="opengraph.webp" width="667" height="634" alt="티빙의 실제 예시" />

위는 디스코드에서 티빙 영화 링크를 올렸을 때 나타나는 미리보기 화면인데, 여기서 나온 정보들이 바로 Open Graph로 정의된 값들이다.

#### `og:title`

```html
<meta
  property="og:title"
  content="사이트 제목"
/>
```

`og:title` 값은 사이트 제목을 담는다.

#### `og:description`

```html
<meta
  property="og:description"
  content="사이트 설명"
/>
```

`og:description` 값은 사이트 설명을 담는다.

#### `og:url`

```html
<meta
  property="og:url"
  content="https://example.com/"
/>
```

`og:url` 값은 해당 페이지의 URL을 담는다. 위에서 예시로 든 디스코드 메시지에서, 제목을 클릭했을 때 이동되는 링크가 바로 이 값으로 정의된 값이다.

#### `og:image`

```html
<meta
  property="og:image"
  content="https://example.com/image.png"
/>
```

`og:image` 값은 해당 페이지를 대표하는 이미지를 담는다. 디스코드 메시지에서 미리보기 이미지로 사용된 것이 바로 이 값이다.

이미지의 URL은 **절대 경로(absolute path)로 정의**해야 한다. 즉, `/image.png`와 같이 정의하는 것이 아니라 `https://example.com/image.png`와 같이 적어주어야 한다.

#### `og:site_name`

```html
<meta
  property="og:site_name"
  content="사이트 이름"
/>
```

`og:site_name` 값은 사이트 이름을 담는다. 디스코드 메시지에서 제목 위에 표시된 사이트 이름이 바로 이 값이다.

#### 그 외의 값

이 외에도 수많은 값들을 정의해줄 수 있다. 이 글에서는 대표적인 값들만을 소개해 보았으며, [공식 문서](https://ogp.me/)에서 더 많은 내용을 확인해볼 수 있으니 읽어보면 좋다.

### Twitter 카드

```html
<meta
  name="twitter:card"
  content="summary_large_image"
/>
<meta
  name="twitter:title"
  content="SEO에 필요한 메타태그 완벽정리"
/>
<meta
  name="twitter:description"
  content="검색 엔진 최적화(SEO)에 필수적인 meta 태그와 캐노니컬(canonical) 링크, Open Graph, Twitter 태그에 대해 알아봅니다."
/>
<meta
  name="twitter:image"
  content="https://pyj-pd.dev/apple-icon.png"
/>
```

[Twitter 카드](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup)는 트위터(X)에서 사용되는 미리보기 카드를 말한다. Open Graph와 유사하게 더 풍부한 미리보기 정보를 전송하기 위해 사용된다. 위 코드는 실제로 이 글에 사용된 트위터 태그이다.
