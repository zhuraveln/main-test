import { Direction } from '../redux/categories/types'

interface Cryptocurrencies {
  code: 'BTC' | 'ETH' | 'USDTTRC'
}

interface Banks {
  code: 'ACRUB' | 'SBERRUB' | 'TCSBRUB'
}

interface Cash {
  code: 'CASHUSD' | 'CASHRUB'
}

/** Creating a sorted object by category code */
export const sortByCode = (directions: Direction[]) => {
  if (!directions) {
    return {}
  }

  const categoriesGroup = {
    cryptocurrencies: ['BTC', 'ETH', 'USDTTRC'],
    banks: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
    cash: ['CASHUSD', 'CASHRUB']
  }

  // create a new group
  const group = {
    cryptocurrencies: [],
    banks: [],
    cash: []
  }

  directions.forEach(direction => {
    group[String(comment.parentId)] ||= [] // create a new array with 'parentId' key if he is not
    group[String(comment.parentId)].push(comment) // push comment to array by 'parentId' key
  })
  return group
}
