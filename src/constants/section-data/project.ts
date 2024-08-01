import { TechStackId } from './tech-stacks'

/** @todo add project demo video */
export type ProjectItem = {
  projectId: string
  description: string
  /**
   * Pattern image id, which is filename of files in (public)`/patterns/*.svg` without extension.
   *
   * For example if path of the pattern image is `/patterns/caution.svg`, the value would be `caution`.
   */
  patternImageId: string
  techStacks: TechStackId[]
}

export const projectList = [
  {
    projectId: 'random-seat',
    description:
      "Tool for generating random seats at school classes. I have solved the problem of other websites that they didn't have UIs that are intuitive enough without having to read manuals on the screen by changing sections into step-by-step styles, and adding 'Add row/column' button instead of sliders that adjust the number of the rows and columns.",
    patternImageId: 'circle',
    techStacks: ['typescript', 'vue'],
  },
  {
    projectId: 'day-summary',
    description:
      'Tool for generating daily time tables for school classes. I have received positive responses from users that it is convenient to use and can save much time by just clicking few buttons instead of manually searching for informations by actually having class presidents to send time table images to class group chat every day.',
    patternImageId: 'caution',
    techStacks: ['typescript', 'react'],
  },
  {
    projectId: 'personality-test',
    description:
      'Entertainment website where users test their personalities with various questions each post. The website itself has never been released to the public. However I could grow skills of dealing with XML files, which stored post data in this case, with JavaScript.',
    patternImageId: 'sharp',
    techStacks: ['typescript', 'react'],
  },
] as const satisfies ProjectItem[]
