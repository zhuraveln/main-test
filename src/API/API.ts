import { Direction, Filter } from '../redux/filters/types'

export default class API {
  // getting directions
  static async getDirections(): Promise<Direction[]> {
    const data = await fetch('./data/directions.json')

    return data.json()
  }

  // getting filter
  static async getFilter(): Promise<Filter[]> {
    const data = await fetch('./data/filter.json')

    return data.json()
  }
}
