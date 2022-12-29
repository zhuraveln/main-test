import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGiveDirection } from '../../redux/categories/slice'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { defineDirectionsByCategory } from '../../utils/defineDirectionsByCategory'

import styles from './CurrencyInput.module.scss'

export const CurrencyInput: React.FC = () => {
  const { directions, currentGiveCategory, currentGiveDirection } =
    useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  const availableDirections = defineDirectionsByCategory(
    directions,
    currentGiveCategory
  )

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGiveDirection(event.target.value))
  }

  return (
    <div className={styles.currencyInput}>
      <input type='number'></input>
      <select onChange={onChangeSelect} defaultValue={currentGiveDirection}>
        {availableDirections?.map(direction => (
          <option value={direction.code} key={direction.code}>
            {direction.code}
          </option>
        ))}
      </select>
    </div>
  )
}
