import React from 'react'
import { Direction } from '../../redux/categories/types'

import styles from './GetSelect.module.scss'

interface IGetSelectProps {
  directions: Direction[]
  categoryFilter: string[]
}

export const GetSelect: React.FC<IGetSelectProps> = () => {
  return <div>GetSelect</div>
}
