export type TechStackData = {
  name: string
  description?: string
}

export const techStackList: TechStackData[][] = [
  // Frontend libraries/frameworks
  [
    {
      name: 'React',
      description: 'Splitting into components is so fun!',
    },
    {
      name: 'Next.js',
      description:
        'This website is made with Next.js. File-based routing is awesome!',
    },
    {
      name: 'Vue',
      description: 'No need for setState() is crazy!',
    },
  ],

  // Styling
  [
    {
      name: 'Sass(SCSS)',
      description:
        'I mainly use SCSS on module CSS for styling. Nesting styles is fabulous!',
    },
    {
      name: 'styled-components',
      description:
        'Pretty hard to organize code, but dynamic styles are awesome!',
    },
  ],

  // Animation
  [
    {
      name: 'Framer Motion',
      description: 'Quite hard to deal with, but still awesome!',
    },
  ],

  // Development
  [
    {
      name: 'TypeScript',
      description:
        "I will never be able to return to the time when I wasn't using TypeScript...",
    },
    {
      name: 'Recoil',
      description: 'My favorite state management library. Simple yet powerful.',
    },
    { name: 'Pinia', description: 'Not bad! Easy to use, easy to organize.' },
    {
      name: 'Vite',
      description: 'How can it be this fast?!',
    },
  ],
]
