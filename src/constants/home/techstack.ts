export type TechStackData = {
  categoryTitle: string
  items: {
    name: string
    description?: string
  }[]
}

export const techStackList = [
  {
    categoryTitle: 'Frontend libraries/frameworks',
    items: [
      {
        name: 'React',
        description:
          'Splitting into components felt like a renovation when I first learned React. No need for document.querySelector() thanks to JSX blew my mind back then.\nFor now, I am using React as my main stack.',
      },
      {
        name: 'Next.js',
        description:
          'This website is made with Next.js. File-based routing reduces so much stress of routing in React. Also, this website is exported as static pages(a.k.a. SSG). Hope it helps increasing site speed.',
      },
      {
        name: 'Vue',
        description:
          'It has so much difference compared to React. It really feels like web components but more compact and advanced.',
      },
    ],
  },
  {
    categoryTitle: 'Styling',
    items: [
      {
        name: 'Sass(SCSS)',
        description:
          'I mainly use SCSS on module CSS for styling. Nesting styles, variables, and a lot of functions make styling in web so much easier.',
      },
      {
        name: 'styled-components',
        description:
          'Dynamic styles through JavaScript was awesome, but I felt it kind of hard to organize code with it.',
      },
    ],
  },
  {
    categoryTitle: 'Animation',
    items: [
      {
        name: 'Framer Motion',
        description:
          'A lot of good features for animations, but pretty hard to deal with.',
      },
    ],
  },
  {
    categoryTitle: 'Development',
    items: [
      {
        name: 'TypeScript',
        description:
          'JavaScript no longer is painful! (Well, still stressful.)',
      },
      {
        name: 'Recoil',
        description:
          'My favorite state management library. Simple yet powerful.',
      },
      {
        name: 'Pinia',
        description:
          'Easy to use, easy to organize. My #1 pick for state management in Vue.',
      },
      {
        name: 'Vite',
        description: 'Wow, that is really fast.',
      },
      {
        name: 'GitHub Actions',
        description:
          'I can write simple GitHub Actions to automate jobs for simple deployment.',
      },
    ],
  },
] as const satisfies TechStackData[]

export type TechStackName =
  (typeof techStackList)[number]['items'][number]['name']
