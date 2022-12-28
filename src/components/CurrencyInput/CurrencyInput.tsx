import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { Direction } from '../../redux/categories/types'
import { useAppSelector } from '../../redux/store'

import styles from './CurrencyInput.module.scss'

export const CurrencyInput: React.FC = () => {
  const { directions, selectGiveCategory } = useAppSelector(categoriesSelector)

  const defineAvailableDirections = (
    directions: Direction[],
    selectGiveCategory: string
  ) => {
    if (selectGiveCategory === 'Криптовалюты') {
      return directions?.filter(
        direction =>
          direction.code === 'BTC' ||
          direction.code === 'ETH' ||
          direction.code === 'USDTTRC'
      )
    } else if (selectGiveCategory === 'Банки') {
      return directions?.filter(
        direction =>
          direction.code === 'ACRUB' ||
          direction.code === 'SBERRUB' ||
          direction.code === 'TCSBRUB'
      )
    } else if (selectGiveCategory === 'Наличные') {
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
    selectGiveCategory
  )

  return (
    <div className={styles.currencyInput}>
      <input type='number'></input>
      <select>
        {availableDirections?.map(direction => (
          <option value={direction.code}>{direction.code}</option>
        ))}
      </select>
    </div>
  )
}
