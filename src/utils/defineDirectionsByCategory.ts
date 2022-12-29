import { Direction } from '../redux/categories/types'

// interface Cryptocurrencies {
//   code: 'BTC' | 'ETH' | 'USDTTRC'
// }

// interface Banks {
//   code: 'ACRUB' | 'SBERRUB' | 'TCSBRUB'
// }

// interface Cash {
//   code: 'CASHUSD' | 'CASHRUB'
// }

// const categoriesGroup = {
//   cryptocurrencies: ['BTC', 'ETH', 'USDTTRC'],
//   banks: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
//   cash: ['CASHUSD', 'CASHRUB']
// }

// // create a new group
// const group = {
//   cryptocurrencies: [],
//   banks: [],
//   cash: []
// }

export const defineDirectionsByCategory = (
  directions: Direction[],
  currentCategory: string
) => {
  if (currentCategory === 'Криптовалюты') {
    return directions?.filter(
      direction =>
        direction.code === 'BTC' ||
        direction.code === 'ETH' ||
        direction.code === 'USDTTRC'
    )
  } else if (currentCategory === 'Банки') {
    return directions?.filter(
      direction =>
        direction.code === 'ACRUB' ||
        direction.code === 'SBERRUB' ||
        direction.code === 'TCSBRUB'
    )
  } else if (currentCategory === 'Наличные') {
    return directions?.filter(
      direction => direction.code === 'CASHUSD' || direction.code === 'CASHRUB'
    )
  } else {
    return directions
  }
}
