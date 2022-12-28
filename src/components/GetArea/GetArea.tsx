import React from 'react'
import { Direction } from '../../redux/categories/types'

import styles from './GetArea.module.scss'

interface IGetSelectProps {
  directions: Direction[]
  category: string[]
}

export const GetArea: React.FC<IGetSelectProps> = () => {
  return <div>GetSelect</div>
}
