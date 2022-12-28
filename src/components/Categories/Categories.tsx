import React from 'react'
import { categoriesSelector } from '../../redux/categories/selectors'
import { categories, setGiveCategory } from '../../redux/categories/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import styles from './Categories.module.scss'

export const Categories: React.FC = () => {
  const dispatch = useAppDispatch()

  const { selectGiveCategory } = useAppSelector(categoriesSelector)

  const changeCategory = (category: string) => {
    dispatch(setGiveCategory(category))
  }

  return (
    <div className={styles.root}>
      <ul>
        {categories?.map((category, index) => (
          <li
            className={
              selectGiveCategory === category ? `${styles.active}` : ''
            }
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
