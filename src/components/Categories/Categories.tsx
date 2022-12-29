import React from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { categories } from '../../redux/filters/slice'
import { useAppDispatch } from '../../redux/store'

import styles from './Categories.module.scss'

interface ICategories {
  currentCategory: string
  setCategory: ActionCreatorWithPayload<
    string,
    'filters/setGiveCategory' | 'filters/setGetCategory'
  >
}

export const Categories: React.FC<ICategories> = ({
  currentCategory,
  setCategory
}) => {
  const dispatch = useAppDispatch()

  // Handler for click to category
  const changeCategory = (category: string) => {
    dispatch(setCategory(category))
  }

  return (
    <div className={styles.root}>
      <ul>
        {categories?.map((category, index) => (
          <li
            className={currentCategory === category ? `${styles.active}` : ''}
            onClick={() => changeCategory(category)}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
