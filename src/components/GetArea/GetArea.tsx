import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGetCategory } from '../../redux/categories/slice'
import { useAppSelector } from '../../redux/store'

import { Categories } from '../Categories/Categories'
import { CurrencyInput } from '../CurrencyInput/CurrencyInput'

import styles from './GetArea.module.scss'

export const GetArea: React.FC = () => {
  const { currentGetCategory: selectGetCategory } =
    useAppSelector(categoriesSelector)

  return (
    <div className={styles.root}>
      {/* HEADER */}
      <h4>Получаете</h4>

      {/* CATEGORIES */}
      <Categories
        selectCategory={selectGetCategory}
        setCategory={setGetCategory}
      />

      {/* CURRENCYINPUT */}
      <CurrencyInput />
    </div>
  )
}
