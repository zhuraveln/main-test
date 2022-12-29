import { RootState } from '../store'

// Selector for filters State
export const categoriesSelector = (state: RootState) => state.filters
