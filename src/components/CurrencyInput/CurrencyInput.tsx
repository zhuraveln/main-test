import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGiveDirection } from '../../redux/categories/slice'
import { Direction } from '../../redux/categories/types'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import styles from './CurrencyInput.module.scss'

export const CurrencyInput: React.FC = () => {
  const { directions, currentGiveCategory, currentGiveDirection } =
    useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  const defineAvailableDirections = (
    directions: Direction[],
    currentGiveCategory: string
  ) => {
    if (currentGiveCategory === 'Криптовалюты') {
      return directions?.filter(
        direction =>
          direction.code === 'BTC' ||
          direction.code === 'ETH' ||
          direction.code === 'USDTTRC'
      )
    } else if (currentGiveCategory === 'Банки') {
      return directions?.filter(
        direction =>
          direction.code === 'ACRUB' ||
          direction.code === 'SBERRUB' ||
          direction.code === 'TCSBRUB'
      )
    } else if (currentGiveCategory === 'Наличные') {
      return directions?.filter(
        direction =>
          direction.code === 'CASHUSD' || direction.code === 'CASHRUB'
      )
    } else {
      return directions
    }
  }

  const availableDirections = defineAvailableDirections(
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
          <option value={direction.code}>{direction.code}</option>
        ))}
      </select>
    </div>
  )
}
