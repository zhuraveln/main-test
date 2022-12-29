import React from 'react'
import { categoriesSelector } from '../../../redux/filters/selectors'
import { setGiveDirection } from '../../../redux/filters/slice'
import { Direction } from '../../../redux/filters/types'
import { useAppDispatch, useAppSelector } from '../../../redux/store'

import { defineDirectionsByCategory } from '../../../utils/defineDirectionsByCategory'

import styles from './GiveInput.module.scss'

export const GiveInput: React.FC = () => {
  // Getting values from Redux store
  const { directions, currentGiveCategory, currentGiveDirection } =
    useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  // State for available directions
  const [availableDirections, setAvailableDirections] = React.useState<
    Direction[]
  >([])

  // Set availableDirections
  React.useEffect(() => {
    if (directions.length) {
      setAvailableDirections(
        defineDirectionsByCategory(directions, currentGiveCategory)
      )
    }
  }, [directions, currentGiveCategory])

  // Set currentGiveDirection
  React.useEffect(() => {
    dispatch(setGiveDirection(availableDirections[0]?.code))
  }, [availableDirections])

  // Handler for changes value in select
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGiveDirection(event.target.value))
  }

  return (
    <div className={styles.currencyInput}>
      {/* INPUT */}
      <input type='number' placeholder='0.24891-12.061'></input>

      {/* SELECT */}
      <select onChange={onChangeSelect} value={currentGiveDirection}>
        {availableDirections?.length &&
          availableDirections?.map(direction => (
            <option value={direction.code} key={direction.code}>
              {direction.name}
            </option>
          ))}
      </select>
    </div>
  )
}
