import { tours } from '../../utils/mockData'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event) as { id: string }
  
  if (!id) {
    throw createError({ statusCode: 400, message: 'ID required' })
  }

  // Find tour from mockData
  const baseTour = tours.find(t => String(t.id) === String(id)) || tours[0]

  // Add extra details for detail page
  return {
    ...baseTour,
    name: 'Novotel Rayong Rim Pae Resort',
    country: 'Tailand',
    location: 'Kao Lak, Tailand',
    price: 273,
    badge: 'Joylar kam qoldi',
    score: 4.2,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80&fit=crop'
    ],
    amenities: [
      { label: '30 M plyajgacha', path: '<path d="M13 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11.5 8l-1.5 4h3l-1 5M9 9l-1.5 2.5M15 9l1.5 2.5"/>' },
      { label: 'Plyajga yaqin', path: '<path d="M3 17c2-2.5 4-3.5 6-3.5s4 1 6 1 4-1 6-3.5M3 12c2-2 4-3 6-3s4 1 6 1 4-1 6-3"/>' },
      { label: "Bolalar bilan ta'til", path: '<circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/><path d="M5 22v-5a2 2 0 012-2h4a2 2 0 012 2v5M8 15v7m4-7v7"/>' },
      { label: 'Ideal tanlov', path: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>' },
      { label: 'Konditsioner', path: '<rect x="2" y="7" width="20" height="7" rx="2"/><path d="M6 14v3m4-3v3m4-3v3m4-3v3"/>' },
      { label: 'Qumli plyaj', path: '<path d="M12 3C8.5 3 6 7 6 12h12c0-5-2.5-9-6-9zm0 0v18M6 12h12"/>' }
    ],
    variants: [
      { roomName: "Bosh ko'rinishi yaxshilangan xona", meal: 'AI - Barchasi kiritilgan', departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 247 },
      { roomName: "Bog' ko'rinishidagi xonalar", meal: 'BB - Nonushta', departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 247 },
      { roomName: "Bod ko'rinishli xonalar", meal: 'BB - Nonushta', departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 247 },
      { roomName: 'Oilaviy suite', meal: 'BB - Nonushta', departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 247 }
    ],
    tourDates: [
      { label: '17 iyul, pay', price: null, rubPrice: null, bestPrice: false, active: false },
      { label: '18 iyul, ju', price: null, rubPrice: '199 463', bestPrice: false, active: false },
      { label: '19 iyul, shan', price: 245, rubPrice: null, bestPrice: true, active: true },
      { label: '20 iyul, yak', price: null, rubPrice: '186 543', bestPrice: false, active: false },
      { label: '21 iyul, du', price: null, rubPrice: null, bestPrice: false, active: false },
      { label: '22 iyul, se', price: null, rubPrice: null, bestPrice: false, active: false },
      { label: '23 iyul, chor', price: null, rubPrice: null, bestPrice: false, active: false }
    ]
  }
})
