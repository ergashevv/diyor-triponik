export default defineEventHandler(async (event) => {
  const { from, to, date } = getQuery(event) as { from: string, to: string, date: string }

  if (!from || !to) {
    return []
  }

  // 1. O'zbekiston poezd turlari ma'lumotlari
  const trainConfig = [
    { 
      type: 'afrosiyob', 
      name: 'Afrosiyob', 
      class: 'Tezkor (High Speed)', 
      numbers: ['762', '764', '766', '768'],
      basePrice: 280000,
      durationRange: [130, 160], // daqiqalarda (2:10 - 2:40)
      wagonTypes: ['vip', 'biznes', 'ekonom']
    },
    { 
      type: 'sharq', 
      name: 'Sharq', 
      class: 'Tezkor (Express)', 
      numbers: ['010', '012', '014'],
      basePrice: 145000,
      durationRange: [240, 280], // (4:00 - 4:40)
      wagonTypes: ['kupe', 'plaskart']
    },
    { 
      type: 'nasaf', 
      name: 'Nasaf', 
      class: 'Tezkor (Express)', 
      numbers: ['008', '158'],
      basePrice: 135000,
      durationRange: [220, 260],
      wagonTypes: ['kupe', 'plaskart']
    },
    { 
      type: 'ozbekiston', 
      name: 'O\'zbekiston', 
      class: 'Yo\'lovchi (Regular)', 
      numbers: ['053', '060', '092'],
      basePrice: 110000,
      durationRange: [300, 360],
      wagonTypes: ['kupe', 'plaskart']
    }
  ]

  // 2. Vaqt oralig'i (Time Slots)
  const slots = [
    { id: 'morning', start: 5, end: 11 },
    { id: 'afternoon', start: 12, end: 17 },
    { id: 'evening', start: 18, end: 23 }
  ]

  const trains = []
  
  // Har bir poezd turi va vaqt oralig'i uchun professional data generatsiya qilamiz
  trainConfig.forEach((config) => {
    slots.forEach((slot) => {
      // Har bir slotda 70% ehtimollik bilan poezd bor
      if (Math.random() > 0.3) {
        const hour = Math.floor(Math.random() * (slot.end - slot.start + 1)) + slot.start
        const min = [0, 5, 10, 15, 30, 45, 50][Math.floor(Math.random() * 7)]
        
        const durationMin = Math.floor(Math.random() * (config.durationRange[1] - config.durationRange[0] + 1)) + config.durationRange[0]
        const durH = Math.floor(durationMin / 60)
        const durM = durationMin % 60

        // Arrival calculation
        const arrivalTotalMin = (hour * 60 + min + durationMin) % (24 * 60)
        const arrivalH = Math.floor(arrivalTotalMin / 60)
        const arrivalM = arrivalTotalMin % 60

        // Seats & Prices
        const availableSeats: any = {
          plaskart: { available: 'Joy yo\'q', price: 0, passengers: '' },
          kupe: { available: 'Joy yo\'q', price: 0, passengers: '' },
          vip: { available: 'Joy yo\'q', price: 0, passengers: '' }
        }

        // Afrosiyobda boshqacha vagonlar
        if (config.type === 'afrosiyob') {
          availableSeats.plaskart = { // Ekonom deb ko'rsatamiz
            available: Math.floor(Math.random() * 40) + 5,
            price: config.basePrice,
            label: 'Ekonom',
            passengers: `${Math.floor(Math.random() * 10) + 2} kishi qolgan`
          }
          availableSeats.kupe = { // Biznes
            available: Math.floor(Math.random() * 15) + 3,
            price: Math.floor(config.basePrice * 1.6),
            label: 'Biznes',
            passengers: ''
          }
          availableSeats.vip = { // VIP
            available: Math.random() > 0.5 ? Math.floor(Math.random() * 5) + 1 : 'Joy yoq',
            price: Math.floor(config.basePrice * 2.8),
            label: 'VIP',
            passengers: ''
          }
        } else {
          // Regular poyezdlar
          availableSeats.plaskart = {
            available: Math.floor(Math.random() * 60) + 10,
            price: config.basePrice,
            label: 'Plaskart',
            passengers: `${Math.floor(Math.random() * 30) + 5} joy pastda`
          }
          availableSeats.kupe = {
            available: Math.floor(Math.random() * 20) + 2,
            price: Math.floor(config.basePrice * 1.8),
            label: 'Kupe',
            passengers: ''
          }
          // Regular poyezdda VIP yo'q
          availableSeats.vip = { available: 'Joy yoq', price: Math.floor(config.basePrice * 3), label: 'VIP' }
        }

        trains.push({
          id: `TR-${config.numbers[0]}-${hour}${min}`,
          number: config.numbers[Math.floor(Math.random() * config.numbers.length)] + (Math.random() > 0.5 ? 'Ф' : 'Қ'),
          name: config.name,
          class: config.class,
          type: config.type,
          timeSlot: slot.id,
          departureTime: `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`,
          arrivalTime: `${String(arrivalH).padStart(2, '0')}:${String(arrivalM).padStart(2, '0')}`,
          duration: `${durH}s ${durM}d yo'lda`,
          departureStation: `${from} vokzali`,
          arrivalStation: `${to} markaziy vokzali`,
          departureCity: from,
          arrivalCity: to,
          departureDate: date || '17 okt, pay',
          arrivalDate: date || '17 okt, pay',
          availableSeats,
          score: (8.5 + Math.random() * 1.4).toFixed(1),
          reviewCount: Math.floor(Math.random() * 1000) + 100,
          amenities: ['wifi', 'food', 'power', 'ac', 'toilet']
        })
      }
    })
  })

  // Sort by departure time
  return trains.sort((a, b) => a.departureTime.localeCompare(b.departureTime))
})
