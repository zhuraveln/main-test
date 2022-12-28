import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/store'
import { categoriesSelector } from './redux/categories/selectors'
import { getDirections, getFilter } from './redux/categories/asyncActions'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { directions, filter, categoriesStatus } =
    useAppSelector(categoriesSelector)

  React.useEffect(() => {
    dispatch(getDirections())
    dispatch(getFilter())
  }, [])

  // console.log(directions)
  // console.log(filter)
  // console.log(categoriesStatus)

  return <div className='App'></div>
}

export default App
