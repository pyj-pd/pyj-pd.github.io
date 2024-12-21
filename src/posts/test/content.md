---
title: 'Test content'

categories: []
draft: true
---

<Callout type="normal">노말 콜아웃</Callout>
<Callout type="info">정보입니다.</Callout>
<Callout type="okay">굿 콜아웃</Callout>
<Callout type="warn">경고 콜아웃</Callout>
<Callout type="error">에러났대요</Callout>

```mdx
<MyComponent id="123" />

You can also use objects with components, such as the `thisOne` component on
the `myComponents` object: <myComponents.thisOne />

<Component
  open
  x={1}
  label={'this is a string, *not* markdown!'}
  icon={<Icon />}
/>

![NAVER!!!](https://naver.com)
```

```c
#include <stdio.h>

#define ARR_LEN 7

void qsort(int v[], int left, int right);
void printArr(int v[], int len);

int main()
{
	int i;
	int v[ARR_LEN] = { 4, 3, 1, 7, 9, 6, 2 }; // [!code highlight]
	printArr(v, ARR_LEN);
	qsort(v, 0, ARR_LEN-1);
	printArr(v, ARR_LEN);
	return 0;
}

void qsort(int v[], int left, int right)
{
	int i, last;
	void swap(int v[], int i, int j);

	if (left >= right)
		return;
	swap(v, left, (left + right) / 2);
	last = left;
	for (i = left+1; i <= right; i++)
		if (v[i] < v[left])
			swap(v, ++last, i);
	swap(v, left, last);
	qsort(v, left, last-1);
	qsort(v, last+1, right);
}

void swap(int v[], int i, int j)
{
	int temp;

	temp = v[i];
	v[i] = v[j];
	v[j] = temp;
}

void printArr(int v[], int len)
{
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", v[i]);
	printf("\n");
}
```

```typescript
import { LitElement, html, customElement, property } from 'lit-element'

const style = /* css */ `
  .foo {
    display: block;
    border: 1px solid black;
    padding: 16px;
    max-width: 800px;
    margin: 0 auto;
  }
`

@customElement('my-element')
class MyElement extends LitElement {
  // Declare observed properties
  @property()
  adjective = 'awesome'

  // Define the element's template
  render(test: string) {
    return html`
      <!-- text binding -->
      <div>${this.prop1}</div>

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input
          type="text"
          ?disabled="${this.prop3}"
        />
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input
          type="text"
          .value="${this.prop4}"
        />
      </div>

      <!-- event handler binding -->
      <div>
        event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>
    `
  }
}

const testFn = async (hello: string): Promise<boolean> => {
  console.log(hello + 'Test!')
}

const name = 'LOL!'

testFn(`Hello, ${name}`)
```
