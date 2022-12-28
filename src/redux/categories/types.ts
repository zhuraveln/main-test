// Status
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface CategoriesSliceState {
  categoryFilter: string[]
  directions: Direction[]
  filter: Filter[]
  categoriesStatus: Status
}

export interface Direction {
  code: string
  name: string
}

export interface Filter {
  from: Direction
  to: Direction
}
