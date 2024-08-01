import {
  TechStackId,
  techStackList,
} from '@/constants/section-data/tech-stacks'

const _flattenedTechStackList = techStackList.flat()

/**
 * Gets tech stack colors from id.
 * @param id Tech stack id
 * @returns `null` if no tech stacks found. Otherwise an object containing background color and text color.
 */
export const getTechStackColors = (id: TechStackId) => {
  const techStackData = _flattenedTechStackList.find(
    (techStack) => techStack.id === id,
  )

  if (techStackData === undefined) return null

  const { backgroundColor, textColor } = techStackData

  return {
    backgroundColor,
    textColor,
  }
}
