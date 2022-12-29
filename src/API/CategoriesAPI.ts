export default class CategoriesAPI {
  static async getDirections() {
    const data = await fetch('./src/assets/data/directions.json')

    return data.json()
  }

  static async getFilter() {
    const data = await fetch('./src/assets/data/filter.json')
    // const data = await fetch('./public/data/filter.json')

    return data.json()
  }
}
