---
title: 'ESLint, Stylelint, Prettier로 코드 정리하기'
description: 'JavaScript, CSS 및 기타 파일들의 포맷의 일관성을 지키기 위해 Lint와 Formatter를 이용하는 방법에 대해 알아봅니다.'

categories: ['programming']
---

## ESLint로 코드 정리하기

ESLint는 JavaScript 및 TypeScript 코드에서 문제를 자동으로 분석하고 고쳐주는 오픈 소스 프로젝트이다.

### ESLint 설치하기

터미널에 다음을 입력하여 프로젝트에 ESLint를 설치할 수 있다.

```bash
$ npm i --save-dev eslint
// 또는
$ pnpm add -D eslint
```

### config 작성하기

> [!info]
> ESLint에서 언급하는 [npm init 방식](https://eslint.org/docs/latest/use/getting-started)으로도 config 파일을 작성할 수 있다. 이 글에서는 수동으로 파일을 생성해서 작성할 것이다.

첫번째로 ESLint의 config 파일을 생성하기 위해 프로젝트 root 폴더에 `eslint.config.js`라는 파일을 생성한다. 해당 파일은 ESLint 버전 v9.0.0 이상부터 사용될 config 방식이며, 기존 `.eslintrc.js`, `.eslintrc.json` 등의 파일을 대체하게 된다. 이 방식은 'Flat Config'라고 불린다.

`eslint.config.js` 파일의 기초를 작성하기 위해 해당 코드를 작성하였다. TypeScript를 사용한다는 가정 하에 작성된 코드이다.

```javascript
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser, // TypeScript 사용. 이 줄을 지우면 정상 작동하지 않는다.
    },
    rules: {
      ...typescriptPlugin.configs.strict.rules, // TypeScript 기본 config
    },
  },
]

export default config
```

Flat Config은 기본 방식과 달리 plugin과 parser 등을 텍스트 자체로 작성하는 것이 아닌, 직접 import하여 설정하는 방식이다. 자세한 사용법은 [ESLint 공식 문서](https://eslint.org/docs/latest/use/configure/configuration-files-new)를 참조하여도 좋다.

이 글에서는 module 방식을 사용했기 때문에 `export default ...` 구문을 사용했다. `package.json` 파일에 `"type": "module"` 구문이 있는지 꼭 확인하여야 한다.

```json
{
  "name": "sample-project",
  "version": "0.1.0",
  "type": "module", // <---
  // ...
  "dependencies": {
    // ...
  }
  // ...
}
```

#### Next.js와 같이 사용하기

[Next.js에서 함께 제공하는 plugin](https://nextjs.org/docs/app/building-your-application/configuring/eslint)을 사용하기 위해서는 위 config 파일에 추가적인 코드를 작성하여야 한다.

```javascript
import nextPlugin from '@next/eslint-plugin-next' // <---

import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@next/next': nextPlugin, // <---
    }, // 생략
  },
]

export default config
```

## Stylelint

Stylelint는 CSS, Sass 파일 등에서 작동하는 린터이다. CSS 파일에서 작동하는 ESLint라고 생각할 수 있다.

### Stylelint 설치하기

터미널에 다음을 입력하여 프로젝트에 Stylelint를 설치할 수 있다.

```bash
$ npm i --save-dev stylelint stylelint-config-standard
// 또는
$ pnpm add -D stylelint stylelint-config-standard
```

[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) 패키지는 기본적인 규칙을 설정해주는 플러그인이다.

만약 SCSS를 사용 중이라면 `stylelint-config-standard` 패키지 대신 [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) 패키지를 설치하면 된다.

## config 작성하기

프로젝트 root 폴더에 `stylelint.config.js`라는 파일을 생성하여 다음과 같이 기초를 작성한다.

```javascript
/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard'],
  // SCSS 사용 중이라면 위의 코드 대신
  // extends: ['stylelint-config-standard-scss],
  plugins: [],
  rules: {},
}

export default config
```
