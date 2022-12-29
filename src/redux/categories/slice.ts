import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDirections, getFilter } from './asyncActions'
import { CategoriesSliceState, Status } from './types'

export const categories: string[] = ['Все', 'Криптовалюты', 'Банки', 'Наличные']

const initialState: CategoriesSliceState = {
  currentGiveCategory: categories[0],
  currentGiveDirection: 'BTC',

  currentGetCategory: categories[0],
  currentGetDirection: 'CASHRUB',

  directions: [],
  filter: [],

  status: Status.LOADING
}

export const tasksSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setGiveCategory(state, action: PayloadAction<string>) {
      state.currentGiveCategory = action.payload
    },
    setGetCategory(state, action: PayloadAction<string>) {
      state.currentGetCategory = action.payload
    },
    setGiveDirection(state, action: PayloadAction<string>) {
      state.currentGiveDirection = action.payload
    },
    setGetDirection(state, action: PayloadAction<string>) {
      state.currentGetDirection = action.payload
    }
  },
  extraReducers: builder => {
    // directions
    builder.addCase(getDirections.pending, state => {
      state.status = Status.LOADING
    })
    builder.addCase(getDirections.fulfilled, (state, action) => {
      state.directions = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(getDirections.rejected, state => {
      state.status = Status.ERROR
    })

    // filter
    builder.addCase(getFilter.pending, state => {
      state.status = Status.LOADING
    })
    builder.addCase(getFilter.fulfilled, (state, action) => {
      state.filter = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(getFilter.rejected, state => {
      state.status = Status.ERROR
    })
  }
})

export const {
  setGiveCategory,
  setGetCategory,
  setGiveDirection,
  setGetDirection
} = tasksSlice.actions

export default tasksSlice.reducer
