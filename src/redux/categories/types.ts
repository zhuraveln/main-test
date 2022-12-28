// Status
export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

// Categories state
export interface CategoriesSliceState {
  selectGiveCategory: string
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
  to: Direction
}
