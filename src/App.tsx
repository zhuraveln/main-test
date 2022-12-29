import React from 'react'
import { useAppDispatch } from './redux/store'
import { getDirections, getFilter } from './redux/filters/asyncActions'

import { GetArea, GiveArea } from './components'

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
