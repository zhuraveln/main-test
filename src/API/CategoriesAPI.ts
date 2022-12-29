export default class CategoriesAPI {
  static async getDirections() {
    const data = await fetch('./data/directions.json')

    return data.json()
  }

  static async getFilter() {
    const data = await fetch('./data/filter.json')

    return data.json()
  }
}
