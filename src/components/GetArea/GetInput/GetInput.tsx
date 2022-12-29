import React from 'react'
import { categoriesSelector } from '../../../redux/filters/selectors'
import { setGetDirection } from '../../../redux/filters/slice'
import { Direction } from '../../../redux/filters/types'

import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { defineAvailableGetDirections } from '../../../utils/defineAvailableGetDirections'

import styles from './GetInput.module.scss'

export const GetInput: React.FC = () => {
  // Getting values from Redux store
  const {
    filter,
    currentGetCategory,
    currentGiveDirection,
    currentGetDirection
  } = useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  // State for available directions
  const [availableDirections, setAvailableDirections] = React.useState<
    Direction[] | null
  >(null)

  // Set availableDirections
  React.useEffect(() => {
    if (filter.length) {
      setAvailableDirections(
        defineAvailableGetDirections(
          filter,
          currentGiveDirection,
          currentGetCategory
        )
      )
    }
  }, [filter, currentGetCategory, currentGiveDirection])

  // Set currentGiveDirection
  React.useEffect(() => {
    if (availableDirections) {
      dispatch(setGetDirection(availableDirections[0]?.code))
    }
  }, [availableDirections])

  // Handler for changes value in select
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGetDirection(event.target.value))
  }

  return (
    <div className={styles.currencyInput}>
      <input type='number' placeholder='365446.37-17707800.62'></input>
      <select onChange={onChangeSelect} value={currentGetDirection}>
        {availableDirections?.length &&
          availableDirections?.map(direction => (
            <option value={direction.code} key={direction.code}>
              {direction.code}
            </option>
          ))}
      </select>
    </div>
  )
}
