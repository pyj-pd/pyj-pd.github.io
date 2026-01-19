---
title: 'Electron + Vite (+ React) 사용하기'
description: 'Electron Forge 모듈을 통해 Electron에서 Vite와 React를 함께 이용하는 방법에 대해 알아봅니다.'

date: '2024-05-11'
categories: ['programming']
---

## electron-vite

Electron과 Vite를 함께 사용하는 방법을 검색하였을 때 첫 번째로 나온 [electron-vite](https://electron-vite.org/)를 먼저 사용해보았다.

먼저 공식 문서에 나와있는 방법대로 설치를 진행해보았다. 아래 명령어를 입력하여 새 프로젝트를 생성해주었다.

```bash
npm create @quick-start/electron
// 또는
pnpm create @quick-start/electron
```

해당 명령어 입력 후 표시되는 절차에 따라 진행하면 된다. 현재 지원되는 프레임워크는 TypeScript 지원(선택)까지 포함하여 `vanilla`, `vue`, `react`, `svelte`, `solid`이다.

하지만 간단한 사이드 프로젝트에는 상당히 부담스럽게 다가온 초기 제공 파일들 때문에 다음 방법을 사용하기로 하였다.

## Electron Forge

[Electron Forge](https://www.electronforge.io/)는 Electron 프로그램 패키지 및 배포를 위한 툴이다.

새 프로젝트를 생성하기 위해 다음 명령어를 입력하였다.

```bash
npm init electron-app@latest my-app -- --template=vite
// 또는
pnpm create electron-app@latest my-app --template=vite
```

이때 `my-app`을 자신이 원하는 프로젝트명으로 바꾸어 주어도 된다.

<Callout type="info">TypeScript를 사용하고 싶다면 뒤의 `--template=vite`를 `--template=vite-typescript`로 바꾸어주면 된다.</Callout>

설치가 완료된 후 Electron 프로그램을 실행하고 싶다면 다음 명령어를 입력해주면 된다.

```bash
npm run start
// 또는
pnpm run start
```

### 코드 변경 후 재시작

Electron 실행 후 터미널에 `rs`를 입력하면 된다.

<Image src="rs vite.gif" unoptimized width="881" height="773" alt="터미털에서 `rs`를 입력한 모습" />

### React와 같이 사용하기

먼저 React 관련 패키지를 설치해주어야 한다.

```bash
npm install --save react react-dom
// 또는
pnpm add react react-dom
```

<Callout type="info">
TypeScript 사용 시 다음 명령어도 추가로 입력해주어야 한다.

```bash
npm install --save-dev @types/react @types/react-dom
// 또는
pnpm add -D @types/react @types/react-dom
```

</Callout>

패키지를 설치해주었다면 관련 파일들을 추가로 생성해주어야 한다.

#### JavaScript 사용 시

`/src/renderer.js` 파일명을 `/src/renderer.jsx`로 변경해준 뒤 그 내용을 다음과 같이 변경하여 준다.

```jsx
// /src/renderer.jsx
import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(<h2>Hello from React!</h2>)
```

그 후 `/index.html` 파일의 `body`를 다음과 같이 변경해준다.

```html
<!doctype html>
<html>
  <head>
    <!-- 생략 -->
  </head>
  <body>
    <!-- 이 두 줄 -->
    <div id="root" />
    <script
      type="module"
      src="/src/renderer"
    ></script>
  </body>
</html>
```

#### TypeScript 사용 시

`/src/renderer.ts` 파일명을 `/src/renderer.tsx`로 변경해준 뒤 그 내용을 다음과 같이 변경해 준다.

```tsx
// /src/renderer.tsx
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(<h2>Hello from React!</h2>)
```

그 후 `/index.html` 파일의 `body`를 다음과 같이 변경해준다.

```html
<!doctype html>
<html>
  <head>
    <!-- 생략 -->
  </head>
  <body>
    <!-- 이 두 줄 -->
    <div id="root" />
    <script
      type="module"
      src="/src/renderer"
    ></script>
  </body>
</html>
```
