import React from 'react'
import reactLogo from './assets/react.svg'
import { useAppDispatch, useAppSelector } from './redux/store'
import { categoriesSelector } from './redux/categories/selectors'
import { getDirections, getFilter } from './redux/categories/asyncActions'

import { GetSelect } from './components/GetSelect/GetSelect'
import { GiveSelect } from './components/GiveSelect/GiveSelect'

import './App.scss'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { directions, filter, categoryFilter, categoriesStatus } =
    useAppSelector(categoriesSelector)

  React.useEffect(() => {
    dispatch(getDirections())
    dispatch(getFilter())
  }, [])

  // console.log(directions)
  // console.log(filter)
  // console.log(categoriesStatus)

  return (
    <div className='root'>
      <GiveSelect directions={directions} categoryFilter={categoryFilter} />
      <GetSelect directions={directions} categoryFilter={categoryFilter} />
    </div>
  )
}

export default App
