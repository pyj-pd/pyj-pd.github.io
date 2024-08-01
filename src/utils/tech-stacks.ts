import type {
  TechStackId,
  TechStackItem,
} from '@/constants/section-data/tech-stacks'
import { techStackList } from '@/constants/section-data/tech-stacks'

const _flattenedTechStackList = techStackList.flat()

/**
 * Gets tech stack data from id.
 * @param id Tech stack id
 * @returns `null` if no tech stacks found. Otherwise an object containing tech stack data.
 */
export const getTechStackData = (id: TechStackId): TechStackItem | null => {
  const techStackData = _flattenedTechStackList.find(
    (techStack) => techStack.id === id,
  )

  if (techStackData === undefined) return null
  else return techStackData
}
