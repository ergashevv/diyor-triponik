export default defineEventHandler(async (event) => {
  const { from, to, date } = getQuery(event) as { from: string, to: string, date: string }

  if (!from || !to) {
    return []
  }

  const trainTypes = [
    { name: 'Afrosiyob', speed: '250 km/h', icon: 'i-mdi-train-variant', color: 'blue' },
    { name: 'Sharq', speed: '140 km/h', icon: 'i-mdi-train', color: 'green' },
    { name: 'O\'zbekiston', speed: '120 km/h', icon: 'i-mdi-train', color: 'red' },
    { name: 'Nasaf', speed: '140 km/h', icon: 'i-mdi-train', color: 'orange' }
  ]

  const wagonTypes = [
    { type: 'VIP', price: 450000, seats: 12, icon: 'i-mdi-star-face' },
    { type: 'Biznes', price: 280000, seats: 24, icon: 'i-mdi-briefcase' },
    { type: 'Ekonnom', price: 175000, seats: 48, icon: 'i-mdi-account-group' }
  ]

  const trains = []
  const startTime = 5 // 5:00
  const count = 12 // 12 trains per day

  for (let i = 0; i < count; i++) {
    const depH = startTime + (i * 3) + Math.floor(Math.random() * 2)
    const depM = [0, 15, 30, 45][Math.floor(Math.random() * 4)]
    const travelTime = 2 + Math.floor(Math.random() * 4) // hours
    
    const arrH = (depH + travelTime) % 24
    const arrM = (depM + 10 + Math.floor(Math.random() * 30)) % 60

    const trainType = trainTypes[Math.floor(Math.random() * trainTypes.length)]
    
    trains.push({
      id: `T${i + 1}`,
      number: `${100 + i * 2}${['A', 'B', 'F', 'Q'][Math.floor(Math.random() * 4)]}`,
      name: trainType.name,
      type: trainType.name,
      departureTime: `${String(depH).padStart(2, '0')}:${String(depM).padStart(2, '0')}`,
      arrivalTime: `${String(arrH).padStart(2, '0')}:${String(arrM).padStart(2, '0')}`,
      duration: `${travelTime}s ${Math.abs(arrM - depM)}d`,
      departureStation: `${from} vokzali`,
      arrivalStation: `${to} markaziy vokzali`,
      departureCity: from,
      arrivalCity: to,
      departureDate: date || '17 okt, pay',
      arrivalDate: date || '17 okt, pay',
      availableSeats: 10 + Math.floor(Math.random() * 50),
      wagonTypes: wagonTypes.map(w => ({
        ...w,
        price: w.price + (Math.floor(Math.random() * 5) * 10000)
      })),
      amenities: ['wifi', 'food', 'power', 'ac', 'toilet']
    })
  }

  return trains
})
