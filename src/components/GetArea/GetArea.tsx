import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { setGetCategory } from '../../redux/categories/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import { Categories } from '../Categories/Categories'
import { CurrencyGetInput } from '../CurrencyGetInput/CurrencyGetInput'

import styles from './GetArea.module.scss'

export const GetArea: React.FC = () => {
  const dispatch = useAppDispatch()

  const { currentGetCategory, currentGiveCategory } =
    useAppSelector(categoriesSelector)

  React.useEffect(() => {
    dispatch(setGetCategory('Все'))
  }, [currentGiveCategory])

  return (
    <div className={styles.root}>
      {/* HEADER */}
      <h4>Получаете</h4>

      {/* CATEGORIES */}
      <Categories
        currentCategory={currentGetCategory}
        setCategory={setGetCategory}
      />

      {/* CURRENCYINPUT */}
      <CurrencyGetInput />
    </div>
  )
}
