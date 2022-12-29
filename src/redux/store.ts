import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import filters from './filters/slice'

// Store
export const store = configureStore({
  reducer: {
    filters
  }
})

// Typed Root state
export type RootState = ReturnType<typeof store.getState>

// Typed redux dispatch
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Typed redux selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
