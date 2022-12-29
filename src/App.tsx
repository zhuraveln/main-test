import React from 'react'
import { useAppDispatch, useAppSelector } from './redux/store'
import { getDirections, getFilter } from './redux/categories/asyncActions'

import { GetArea } from './components/GetArea/GetArea'
import { GiveArea } from './components/GiveArea/GiveArea'

import './App.scss'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getDirections())
    dispatch(getFilter())
  }, [])

  return (
    <div className='root'>
      <div className='container'>
        {/* GIVE AREA */}
        <GiveArea />

        {/* GET AREA */}
        <GetArea />
      </div>
    </div>
  )
}

export default App
