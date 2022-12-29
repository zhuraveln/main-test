import { Direction } from '../redux/filters/types'

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
