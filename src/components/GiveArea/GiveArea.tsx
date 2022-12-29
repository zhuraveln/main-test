import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGiveCategory } from '../../redux/categories/slice'
import { useAppSelector } from '../../redux/store'

import { Categories } from '../Categories/Categories'
import { CurrencyInput } from '../CurrencyInput/CurrencyInput'

import styles from './GiveArea.module.scss'

export const GiveArea: React.FC = () => {
  const { currentGiveCategory: selectGiveCategory } =
    useAppSelector(categoriesSelector)

  return (
    <div className={styles.root}>
      {/* HEADER */}
      <h4>Отдаёте</h4>

      {/* CATEGORIES */}
      <Categories
        selectCategory={selectGiveCategory}
        setCategory={setGiveCategory}
      />

      {/* CURRENCYINPUT */}
      <CurrencyInput />
    </div>
  )
}
