import { Direction } from '../redux/filters/types'

const currencyCategories = {
  cryptocurrencies: ['BTC', 'ETH', 'USDTTRC'],
  banks: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
  cash: ['CASHUSD', 'CASHRUB']
}

export const defineDirectionsByCategory = (
  directions: Direction[],
  currentCategory: string
) => {
  if (currentCategory === 'Криптовалюты') {
    return directions?.filter(direction =>
      currencyCategories.cryptocurrencies.includes(direction.code)
    )
  } else if (currentCategory === 'Банки') {
    return directions?.filter(direction =>
      currencyCategories.banks.includes(direction.code)
    )
  } else if (currentCategory === 'Наличные') {
    return directions?.filter(direction =>
      currencyCategories.cash.includes(direction.code)
    )
  } else {
    return directions
  }
}
