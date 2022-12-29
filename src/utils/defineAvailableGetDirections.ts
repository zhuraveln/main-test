import { Filter } from '../redux/filters/types'
import { defineDirectionsByCategory } from './defineDirectionsByCategory'

export const defineAvailableGetDirections = (
  filter: Filter[],
  currentGiveDirection: string,
  currentGetCategory: string
) => {
  const availableGetDirections = filter.find(
    filter => filter.from.code === currentGiveDirection
  )

  if (availableGetDirections) {
    const availableGetDirectionsByCategory = defineDirectionsByCategory(
      availableGetDirections?.to,
      currentGetCategory
    )

    return availableGetDirectionsByCategory
  }

  return null
}
