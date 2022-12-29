import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../API/API'

// Async action for get directions
export const getDirections = createAsyncThunk(
  'filters/getDirectionsStatus',
  async () => {
    const data = await API.getDirections()

    return data
  }
)

// Async action for get filter
export const getFilter = createAsyncThunk(
  'filters/getFilterStatus',
  async () => {
    const data = await API.getFilter()

    return data
  }
)
