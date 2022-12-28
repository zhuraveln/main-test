import React from 'react'

import { Direction } from '../../redux/categories/types'
import { useAppDispatch } from '../../redux/store'
import { Categories } from '../Categories/Categories'

import styles from './GiveArea.module.scss'

interface IGiveAreaProps {
  directions: Direction[]
  selectGiveCategory: string
}

export const GiveArea: React.FC<IGiveAreaProps> = ({
  directions,
  selectGiveCategory
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.root}>
      {/* HEADER */}
      <div className={styles.header}>
        <h4>Отдаёте</h4>
      </div>

      {/* CATEGORIES */}
      <Categories />

      {/* CURRENCYINPUT */}
      <div className={styles.currencyInput}>
        <input type='number'></input>
        <select>
          <option value='123'>123</option>
          <option value='123'>123</option>
        </select>
      </div>
    </div>
  )
}
