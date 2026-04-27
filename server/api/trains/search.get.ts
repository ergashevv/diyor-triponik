export default defineEventHandler(async (event) => {
  const { from, to, date } = getQuery(event) as { from: string, to: string, date: string }

  if (!from || !to) {
    return []
  }

  const trainTypes = [
    { name: 'Afrosiyob', speed: '250 km/h', class: 'Tezkor', numbers: ['059A', '061'] },
    { name: 'Sharq', speed: '140 km/h', class: 'Tunik', numbers: ['761', '763'] },
    { name: 'O\'zbekiston', speed: '120 km/h', class: 'Yo\'lovchi', numbers: ['053', '067', '145'] }
  ]

  const trains = []
  const count = 10

  for (let i = 0; i < count; i++) {
    const depH = 5 + (i * 2)
    const depM = [0, 15, 30, 45][Math.floor(Math.random() * 4)]
    const travelTime = 3 + Math.floor(Math.random() * 3)
    
    const arrH = (depH + travelTime) % 24
    const arrM = (depM + 20) % 60

    const trainType = trainTypes[Math.floor(Math.random() * trainTypes.length)]
    
    // Original UI expects availableSeats with plaskart, kupe, vip keys
    const availableSeats = {
      plaskart: {
        available: Math.floor(Math.random() * 40) + 10,
        price: 150000 + Math.floor(Math.random() * 50000),
        passengers: `${Math.floor(Math.random() * 20) + 5} pasida`
      },
      kupe: {
        available: Math.floor(Math.random() * 20) + 5,
        price: 280000 + Math.floor(Math.random() * 80000),
        passengers: `${Math.floor(Math.random() * 10) + 2} pasida`
      },
      vip: {
        available: Math.random() > 0.5 ? Math.floor(Math.random() * 10) + 2 : 'Joy yoq',
        price: 450000 + Math.floor(Math.random() * 150000),
        passengers: ''
      }
    }

    trains.push({
      id: `T${i + 1}`,
      number: trainType.numbers[Math.floor(Math.random() * trainType.numbers.length)],
      name: trainType.name,
      class: trainType.class,
      departureTime: `${String(depH).padStart(2, '0')}:${String(depM).padStart(2, '0')}`,
      arrivalTime: `${String(arrH).padStart(2, '0')}:${String(arrM).padStart(2, '0')}`,
      duration: `${travelTime} soat 20 daqiqa`,
      departureStation: `${from} vokzali`,
      arrivalStation: `${to} markaziy vokzali`,
      departureCity: from,
      arrivalCity: to,
      departureDate: date || '17 okt, pay',
      arrivalDate: date || '17 okt, pay',
      availableSeats,
      type: trainType.name.toLowerCase(), // for filtering
      timeSlot: depH < 12 ? 'morning' : depH < 18 ? 'afternoon' : 'evening'
    })
  }

  return trains
})
