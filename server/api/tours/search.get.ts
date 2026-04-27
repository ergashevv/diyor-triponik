import { tours } from '../../utils/mockData'

export default defineEventHandler(async (event) => {
  const { tag, country, q } = getQuery(event) as { tag?: string, country?: string, q?: string }

  const allTours = tours.map(t => ({
    ...t,
    src: t.image,
    score: t.score || (Math.random() * 2 + 8).toFixed(1),
    stars: t.stars || Math.floor(Math.random() * 3) + 3,
    distanceAirport: t.distanceAirport || '25 km aeroportgacha',
    distanceBeach: t.distanceBeach || '100 m plyajgacha',
    bookings: t.bookings || 'Oyda 15 marta bron qilingan',
    updatedAt: t.updatedAt || 'Hozirgina yangilandi',
    nights: t.nights || `${t.days} kecha`,
    amenities: [
      { icon: 'i-mdi-bed-outline', label: '1-qator' },
      { icon: 'i-mdi-wifi', label: 'Wi-Fi' },
      { icon: 'i-mdi-air-conditioner', label: 'Konditsioner' },
      { icon: 'i-mdi-silverware-fork-knife', label: 'Nonushta' }
    ]
  }))

  let filtered = [...allTours]

  if (tag && tag !== 'all') {
    filtered = filtered.filter(t => t.tags.includes(tag))
  }

  if (country) {
    filtered = filtered.filter(t => t.country.toLowerCase().includes(country.toLowerCase()))
  }

  if (q) {
    const query = q.toLowerCase()
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(query) || 
      t.country.toLowerCase().includes(query) ||
      (t.description && t.description.toLowerCase().includes(query))
    )
  }

  // Ensure at least 12 results for a "full" look
  if (filtered.length < 12) {
    const extra = allTours.filter(t => !filtered.find(f => f.id === t.id)).slice(0, 12 - filtered.length)
    filtered = [...filtered, ...extra]
  }

  return filtered
})
