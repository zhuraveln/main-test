import React from 'react'
import { categoriesSelector } from '../../redux/filters/selectors'
import { setGiveCategory } from '../../redux/filters/slice'
import { useAppSelector } from '../../redux/store'

import { Categories } from '../Categories/Categories'
import { GiveInput } from './GiveInput/GiveInput'

import styles from './GiveArea.module.scss'

export const GiveArea: React.FC = () => {
  // Getting values from Redux store
  const { currentGiveCategory: selectGiveCategory } =
    useAppSelector(categoriesSelector)

  return (
    <div className={styles.root}>
      {/* HEADER */}
      <h4>Отдаёте</h4>

      {/* CATEGORIES */}
      <Categories
        currentCategory={selectGiveCategory}
        setCategory={setGiveCategory}
      />

      {/* CURRENCYINPUT */}
      <GiveInput />
    </div>
  )
}
