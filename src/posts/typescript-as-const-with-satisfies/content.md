---
title: TypeScript에서 as const와 타입 동시에 사용하기
---

## 문제 발생

TypeScript + Vue를 사용하다가 컴포넌트들의 목록을 오브젝트에 저장할 상황이 생겼다.
컴포넌트 목록은 다음과 같이 정의했다.

```typescript
export type ComponentInfo = {
  [id: string]: {
    title: string
    component: Component
  }
}

export const sections: ComponentInfo = {
  main: {
    title: '메인 화면',
    component: Main,
  },
}
```

이때 컴포넌트 목록은 바뀌지 않는 상수로 취급하여 컴포넌트들의 고유 id를 또다른 타입으로 지정하기 위해 해당 오브젝트를 `as const`를 사용하여 상수로 취급하려고 하였다.

```typescript
export type ComponentInfo = {
  // ...
}

export const sections = {
  // ...
} as const // <-- 수정

export type SectionId = keyof typeof sections // <-- 추가
```

하지만 이렇게 했을 때 `sections` 오브젝트에서 자동 완성 및 타입 체킹이 작동하지 않는 문제가 발생하였고, 따라서 `as const`를 사용하면서도 타입 체킹을 할 수 있는 방법을 모색해보기로 하였다.

## 해결

`satisfies` 문법은 기존의 타입을 바꾸지 않으면서도 타입 체킹을 가능하게 해주는 문법으로, [4.9 버전에서 추가되었다.](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)

이 문법을 사용하여 `sections` 오브젝트의 타입을 따로 검사하는 코드를 추가하였다.

```typescript
export type ComponentInfo = {
  // ...
}

export const sections = {
  // ...
} as const satisfies ComponentInfo // <-- 추가

export type SectionId = // ...
```

이로써 `sections` 오브젝트의 타입 만족을 확신할 수 있게 되었으며, 이는 추후 유지 보수에도 도움이 될 수 있을 것이다.

## 작동 확인

자동 완성 또한 아래와 같이 정상적으로 작동한다.

<Image src="autocompletion-with-as-const.png" width="1210" height="604" alt="자동 완성이 작동하는 모습" />

아래와 같이, 해당 오브젝트가 타입을 만족하지 않게 수정했을 때 오류가 발생하는 모습도 확인할 수 있다.

<Image src="type-error.png" width="1238" height="488" alt="타입을 만족하지 않게 수정했을 때 오류가 발생하는 모습" />

또한, 상수로써 타입을 지정했으므로 값을 수정할 때에도 오류가 발생한다.

<Image src="cant-modify-with-as-const.png" width="1296" height="416" alt="값 수정 시 오류가 발생하는 모습" />

같은 이유로 해당 오브젝트 내의 값들도 `readonly`로 치환되었다.

<Image src="readonly-value-with-as-const.png" width="1294" height="510" alt="`readonly`로 값이 바뀐 모습" />

추가로, `SectionId` 타입도 의도한 대로 작동한다.

<Image src="sectionid-type.png" width="816" height="488" alt="`SectionId` 타입이 작동하는 모습" />

## `satisfies` 문법과 `as` 문법의 차이점

- `satisfies` 문법은 단순히 해당 타입을 만족하는지만 검사하며, 실제 타입에 변동을 주지 않는다.
- 반면에 `as` 문법은 타입 자체를 해당 타입으로 바꾼다.

```typescript
type Fruit = 'apple' | 'orange'

let fruit1 = 'apple' as Fruit
let fruit2 = 'apple' satisfies Fruit
```

위 코드에서 `as` 문법을 사용한 `fruit1`의 타입은 `string`에서 `Fruit`으로 바뀐 반면에,
`satisfies` 문법을 사용한 `fruit2`의 타입은 그대로 `string`이다.

따라서 `fruit1`의 값을 바꿀 때에도 `Fruit` 타입에 맞는 자동 완성이 작동한다.

<Image src="as-autocompletion.png" width="337" height="153" alt="`fruit1`의 값을 바꿀 때 자동 완성이 작동하는 모습" />

반면에 `fruit2`는 `string` 타입이므로 자동 완성이 작동하지 않는다.
