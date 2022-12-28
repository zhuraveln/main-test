import React from 'react'
import { Direction } from '../../redux/categories/types'

import styles from './GiveSelect.module.scss'

interface IGiveSelectProps {
  directions: Direction[]
  categoryFilter: string[]
}

export const GiveSelect: React.FC<IGiveSelectProps> = ({
  directions,
  categoryFilter
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h4>Отдаёте</h4>
      </div>
      <div className={styles.categories}>
        <ul>
          {categoryFilter?.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.currencyTypes}></div>
    </div>
  )
}
