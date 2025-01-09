---
title: '다차원 Array의 아이템 교체하기'
description: '여러 개의 Array가 네스팅되어 있는 Array의 아이템을 안전하게 교체하는 방법에 대해 알아봅니다. Array.fill 메소드를 통해 채운 Array를 수정할 때 발생하는 문제점에 대해 알아보고, 더 나은 방법을 탐색해봅니다.'

date: '2024-05-19'
lastUpdateDate: '2024-05-20'
categories: ['programming']
---

## 문제 발생

다음과 같은 형태의 코드를 사용해 2차원 배열이 Array를 생성하고자 하였다.

```js
const rowSize = 5,
  columnSize = 6

const someArray = Array(rowSize).fill(Array(columnSize).fill(null))

console.log(someArray)
// [
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null],
//   [null, null, null, null, null, null]
// ]
```

위 코드에서 가로(`columnSize`)는 6개의 요소를, 세로(`rowSize`)는 5개의 요소를 포함한다.

이때 가로 인덱스 0번째 및 세로 인덱스 3번째에 있는 요소의 값을 변경하고자 다음과 같이 코드를 작성하였다.

```js
// ...

someArray[3][0] = 'test'

console.log(someArray)
```

하지만 예상과 다르게, **모든 세로줄에서** 가로 인덱스가 0번째인 요소가 변경되었음을 확인하였다.

```js
;[
  ['test', null, null, null, null, null],
  ['test', null, null, null, null, null],
  ['test', null, null, null, null, null],
  ['test', null, null, null, null, null],
  ['test', null, null, null, null, null],
]
```

## 자료 탐색

한 Stack Overflow 글([Stack Overflow - Javascript multidimensional array updating specific element](https://stackoverflow.com/questions/9979560/javascript-multidimensional-array-updating-specific-element))에서 해당 문제를 다루고 있는 것을 발견하였는데, 이 글에서도 동일하게 `Array.fill()`([MDN 문서 - Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill))을 이용하여 Array를 만들고 있었다.

```js
const someArray =
  // 1.
  Array(rowSize).fill(
    // 2.
    Array(columnSize).fill(null),
  )
```

이때 문제는, 위와 같이 새 Array를 만들 때 `Array.fill()`을 사용할 경우, `1.`에서 `2.`를 이용해 빈 Array를 채우고 있을 때마다 새로운 `2.`가 생성되고 있던 것이 아니라 **매번 동일한 `2.`를 사용**하고 있었던 것이다.

```js
// ...

const someArray = Array(rowSize).fill(Array(columnSize).fill(null))

console.log(someArray[0] === someArray[1]) // true
```

따라서 위와 같이 0번째 줄과 1번째 줄을 비교한다면 **동일하다**는 결과물이 출력되는 것이다.

## 해결

```js
const rowSize = 5,
  columnSize = 6

const someArray = [...new Array(rowSize)].map(() =>
  Array(columnSize).fill(null),
)

someArray[3][0] = 'test'

console.log(someArray)
```

위와 같이, `Array.fill()` 대신 `Array.map()`([MDN 문서 - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))을 이용하여 초기 Array를 생성한다면 다음과 같이 원하는 결과물을 얻을 수 있다.

```js
;[
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  ['test', null, null, null, null, null],
  [null, null, null, null, null, null],
]
```

이때 0번째 줄과 1번째 줄은 같지 않다.

```js
const rowSize = 5,
  columnSize = 6

const someArray = [...new Array(rowSize)].map(() =>
  Array(columnSize).fill(null),
)

console.log(someArray[0] === someArray[1]) // false
```
