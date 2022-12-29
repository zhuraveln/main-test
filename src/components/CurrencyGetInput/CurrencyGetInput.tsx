import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGetDirection } from '../../redux/categories/slice'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { defineAvailableGetDirections } from '../../utils/defineAvailableGetDirections'

import styles from './CurrencyGetInput.module.scss'

export const CurrencyGetInput: React.FC = () => {
  const { filter, currentGetCategory, currentGiveDirection } =
    useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  const availableGetDirections = defineAvailableGetDirections(
    filter,
    currentGiveDirection,
    currentGetCategory
  )

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGetDirection(event.target.value))
  }

  return (
    <div className={styles.currencyInput}>
      <input type='number'></input>
      <select onChange={onChangeSelect}>
        {availableGetDirections?.map(direction => (
          <option value={direction.code} key={direction.code}>
            {direction.code}
          </option>
        ))}
      </select>
    </div>
  )
}
