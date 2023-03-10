// Status
export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

// Filters state
export interface CategoriesSliceState {
  currentGiveCategory: string
  currentGiveDirection: string
  currentGetCategory: string
  currentGetDirection: string
  directions: Direction[]
  filter: Filter[]
  status: Status
}

export interface Direction {
  code: string
  name: string
}

export interface Filter {
  from: Direction
  to: Direction[]
}
