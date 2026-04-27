import { carClasses } from '../../utils/mockData'

export default defineEventHandler(async (event) => {
  const { location, to } = getQuery(event) as { location?: string, to?: string }

  // Simple location-based price adjustment
  const multiplier = location && to ? 1.2 : 1.0

  const results = carClasses.map(c => ({
    ...c,
    price: (c.price * multiplier).toFixed(2),
    image: '/assets/images/car.svg',
    dark: c.id % 2 === 0
  }))

  // Add more variations to have "more" results
  const extraResults = results.map(c => ({
    ...c,
    id: c.id + 100,
    name: `${c.name} Plus`,
    price: (Number(c.price) * 1.15).toFixed(2),
    notice: Math.max(1, c.notice - 2)
  }))

  return [...results, ...extraResults]
})
