import { createSlice } from '@reduxjs/toolkit'
import { getDirections, getFilter } from './asyncActions'
import { CategoriesSliceState, Status } from './types'

const initialState: CategoriesSliceState = {
  directions: [],
  filter: [],
  categoriesStatus: Status.LOADING
}

export const tasksSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // directions
    builder.addCase(getDirections.pending, state => {
      state.categoriesStatus = Status.LOADING
    })
    builder.addCase(getDirections.fulfilled, (state, action) => {
      state.directions = action.payload
      state.categoriesStatus = Status.SUCCESS
    })
    builder.addCase(getDirections.rejected, state => {
      state.categoriesStatus = Status.ERROR
    })

    // filter
    builder.addCase(getFilter.pending, state => {
      state.categoriesStatus = Status.LOADING
    })
    builder.addCase(getFilter.fulfilled, (state, action) => {
      state.filter = action.payload
      state.categoriesStatus = Status.SUCCESS
    })
    builder.addCase(getFilter.rejected, state => {
      state.categoriesStatus = Status.ERROR
    })
  }
})

export const {} = tasksSlice.actions

export default tasksSlice.reducer
