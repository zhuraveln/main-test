import { createAsyncThunk } from '@reduxjs/toolkit'
import CategoriesAPI from '../../API/CategoriesAPI'

// Async actions for get directions
export const getDirections = createAsyncThunk(
  'categories/getDirectionsStatus',
  async () => {
    const data = await CategoriesAPI.getDirections()
    if (data) {
      return data
    }
  }
)

// Async actions for get filter
export const getFilter = createAsyncThunk(
  'categories/getFilterStatus',
  async () => {
    const data = await CategoriesAPI.getFilter()

    if (data) {
      return data
    }
  }
)
