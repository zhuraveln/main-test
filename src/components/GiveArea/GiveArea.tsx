import React from 'react'

import { Categories } from '../Categories/Categories'
import { CurrencyInput } from '../CurrencyInput/CurrencyInput'

import styles from './GiveArea.module.scss'

export const GiveArea: React.FC = () => {
  return (
    <div className={styles.root}>
      {/* HEADER */}
      <h4>Отдаёте</h4>

      {/* CATEGORIES */}
      <Categories />

      {/* CURRENCYINPUT */}
      <CurrencyInput />
    </div>
  )
}
