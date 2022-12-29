import React from 'react'
import { categoriesSelector } from '../../redux/filters/selectors'
import { setGetCategory } from '../../redux/filters/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import { Categories, GetInput } from '..'

import styles from './GetArea.module.scss'

export const GetArea: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting values from Redux store
  const { currentGetCategory, currentGiveCategory } =
    useAppSelector(categoriesSelector)

  // Set to default GetCategory if changed GiveCategory
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
      <GetInput />
    </div>
  )
}
