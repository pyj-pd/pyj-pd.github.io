export type TechStackColorData = {
  backgroundColor: string
  textColor: string
}

export type TechStackItemData = {
  name: string
  description?: string
  url: string
} & TechStackColorData

export type TechStackData = {
  categoryTitle: string
  items: TechStackItemData[]
}

export const techStackList = [
  {
    categoryTitle: 'Frontend libraries/frameworks',
    items: [
      {
        name: 'React',
        description:
          'Splitting into components felt like a renovation when I first learned React. No need for document.querySelector() thanks to JSX blew my mind back then.\nFor now, I am using React as my main stack.',
        url: 'https://react.dev/',

        backgroundColor: '#77c7d9',
        textColor: '#000000',
      },
      {
        name: 'Next.js',
        description:
          'This website is made with Next.js. File-based routing reduces so much stress of routing in React. Also, this website is exported as static pages(a.k.a. SSG). Hope it helps increasing site speed.',
        url: 'https://nextjs.org/',

        backgroundColor: '#000000',
        textColor: '#ffffff',
      },
      {
        name: 'Vue',
        description:
          'It has so much difference compared to React. It really feels like web components but more compact and advanced.',
        url: 'https://vuejs.org/',

        backgroundColor: '#5cb38b',
        textColor: '#000000',
      },
      {
        name: 'Nuxt',
        url: 'https://nuxt.com/',

        backgroundColor: '#00dc82',
        textColor: '#020618',
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
        url: 'https://sass-lang.com/',

        backgroundColor: '#bc6490',
        textColor: '#ffffff',
      },
      {
        name: 'styled-components',
        description:
          'Dynamic styles through JavaScript was awesome, but I felt it kind of hard to organize code with it.',
        url: 'https://www.styled-components.com/',

        backgroundColor: '#000000',
        textColor: '#cb7b94',
      },

      {
        name: 'Motion',
        description:
          'A lot of good features for animations, but pretty hard to deal with.',
        url: 'https://motion.dev/',

        backgroundColor: '#f2ea59',
        textColor: '#000000',
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
        url: 'https://www.typescriptlang.org/',

        backgroundColor: '#4a7bb4',
        textColor: '#ffffff',
      },
      {
        name: 'Pinia',
        description:
          'Easy to use, easy to organize. My #1 pick for state management in Vue.',
        url: 'https://pinia.vuejs.org/',

        backgroundColor: '#ffd858',
        textColor: '#000000',
      },
      {
        name: 'Vite',
        description: 'Wow, that is really fast.',
        url: 'https://vite.dev/',

        backgroundColor: '#b861b8',
        textColor: '#ffffff',
      },
      {
        name: 'GitHub Actions',
        description:
          'I can write simple GitHub Actions to automate jobs for simple deployment.',
        url: 'https://github.com/features/actions',

        backgroundColor: '#000',
        textColor: '#ffffff',
      },
    ],
  },
] as const satisfies TechStackData[]

export type TechStackName =
  (typeof techStackList)[number]['items'][number]['name']

const _getTechStackColors = () => {
  const techStackColorDataList: {
    [key: string]: TechStackColorData
  } = {}

  for (const category of techStackList) {
    for (const { name, backgroundColor, textColor } of category.items)
      techStackColorDataList[name] = {
        backgroundColor,
        textColor,
      } as TechStackColorData
  }

  return techStackColorDataList as {
    [key in TechStackName]: TechStackColorData
  }
}

export const techStackColors = _getTechStackColors()
