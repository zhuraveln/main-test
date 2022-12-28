import React from 'react'
import { useAppDispatch, useAppSelector } from './redux/store'
import { categoriesSelector } from './redux/categories/selectors'
import { getDirections, getFilter } from './redux/categories/asyncActions'

import { GetArea } from './components/GetArea/GetArea'
import { GiveArea } from './components/GiveArea/GiveArea'

import './App.scss'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { directions, filter, selectGiveCategory, status } =
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
      {/* GIVE AREA */}
      <GiveArea
        directions={directions}
        selectGiveCategory={selectGiveCategory}
      />

      {/* GET AREA */}
      {/* <GetArea directions={directions} categoryFilter={category} /> */}
    </div>
  )
}

export default App
