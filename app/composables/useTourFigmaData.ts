export const useTourFigmaData = () => {
  const searchHero = {
    departureCity: 'Toshkent',
    destination: 'Tayland',
    departureDate: '19.07.2025',
    nights: 7,
    adults: 2,
    children: 0,
  }

  const searchSummary = {
    title: "Turkiya bo'ylab: 1675 ta turlar",
    subtitle: "Qo'llanilgan filtrlar:",
    activeFilter: 'Internet',
  }

  const sidebarBlocks = [
    {
      title: 'Saralash',
      items: ['Mashhurlik bo\'yicha'],
    },
    {
      title: "Bir kecha uchun narx (UZS)",
      items: ['USD 220', 'USD 700'],
      range: [18, 82],
    },
    {
      title: 'Yulduzlar',
      items: ['★★★★★', '★★★★', '★★★', '★★', '★'],
    },
    {
      title: 'Taomlar',
      items: [
        'UAI - barchasi kiritilgan',
        'AI - barchasi kiritilgan',
        'AI (noAI) - barchasi kiritilgan (alkogolsiz)',
        'FB - nonushta, tushlik, kechlik',
        'HB - nonushta + kechlik',
        'RO - taomlar yo\'q',
      ],
    },
    {
      title: 'Qulaylik',
      items: [
        'Shaharga yaqin',
        'Bolalar bilan dam olish',
        'Juftliklar uchun ideal',
        'Internet',
        'Konditsioner',
        'Sog\'lomlashtiruvchi turlar',
      ],
    },
    {
      title: 'Taomlar',
      items: [
        'Taomlar kiritilmagan',
        'Nonushta kiritilgan',
        'Tushlik yoki kechlik kiritilgan',
        'Hammasi ichida',
      ],
    },
    {
      title: 'Plyaj turi',
      items: ['Barcha', 'Qumli', 'Toshli'],
    },
    {
      title: 'Suvli mashg\'ulotlar',
      items: ['Ochiq basseyn', 'Issiq basseyn', 'Basseyn dengiz suvi bilan'],
    },
  ]

  const searchResults = [
    {
      id: 201,
      title: 'Coastal Escape Natai',
      location: 'Kao Lak, Tailand',
      score: '9.2',
      scoreColor: 'bg-[#2d63ff]',
      badge: 'Joy kam qoldi',
      discount: '15% chegirma',
      image: 'https://images.unsplash.com/photo-1501117716987-c8e0a1d9d5f7?w=900&q=80&fit=crop',
      labels: ['30 km aeroportgacha', '50 m plyajgacha'],
      features: ['1-qator', 'konditsioner', 'qum plyaj', 'Wi-Fi'],
      rightTitle: 'Oyda 2 marta\nbron qilingan',
      price: 256,
      priceSuffix: 'dan',
      updatedAt: '10 daqiqa oldin',
      dateText: '19 iyuldan 7 kechaga',
      cta: 'Turlarni ko\'rish',
      favorite: false,
    },
    {
      id: 202,
      title: 'Coastal Escape Natai',
      location: 'Kao Lak, Tailand',
      score: '9.2',
      scoreColor: 'bg-[#2d63ff]',
      badge: 'Joy kam qoldi',
      discount: '15% chegirma',
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=900&q=80&fit=crop',
      labels: ['30 km aeroportgacha', '50 m plyajgacha'],
      features: ['1-qator', 'konditsioner', 'qum plyaj', 'Wi-Fi'],
      rightTitle: 'Oyda 2 marta\nbron qilingan',
      price: 256,
      priceSuffix: 'dan',
      updatedAt: '10 daqiqa oldin',
      dateText: '19 iyuldan 7 kechaga',
      cta: 'Turlarni ko\'rish',
      favorite: false,
    },
    {
      id: 203,
      title: 'Coastal Escape Natai',
      location: 'Kao Lak, Tailand',
      score: '9.2',
      scoreColor: 'bg-[#2d63ff]',
      badge: 'Joy kam qoldi',
      discount: '',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&q=80&fit=crop',
      labels: ['30 km aeroportgacha', '50 m plyajgacha'],
      features: ['1-qator', 'konditsioner', 'qum plyaj', 'Wi-Fi'],
      rightTitle: 'Oyda 2 marta\nbron qilingan',
      price: 256,
      priceSuffix: 'dan',
      updatedAt: '10 daqiqa oldin',
      dateText: '19 iyuldan 7 kechaga',
      cta: 'Turlarni ko\'rish',
      favorite: false,
    },
    {
      id: 204,
      title: 'Four Seasons Resort Koh Samui',
      location: 'Kao Lak, Tailand',
      score: '9.2',
      scoreColor: 'bg-[#2d63ff]',
      badge: 'Joy kam qoldi',
      discount: '15% chegirma',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&fit=crop',
      labels: ['30 km aeroportgacha', '50 m plyajgacha'],
      features: ['1-qator', 'konditsioner', 'qum plyaj', 'Wi-Fi'],
      rightTitle: 'Oyda 2 marta\nbron qilingan',
      price: 256,
      priceSuffix: 'dan',
      updatedAt: '10 daqiqa oldin',
      dateText: '19 iyuldan 7 kechaga',
      cta: 'Turlarni ko\'rish',
      favorite: false,
    },
  ]

  const resultInclusion = {
    title: "Tur odatda o'z ichiga oladi",
    items: [
      { label: 'Parvoz', icon: 'i-mdi-airplane' },
      { label: 'Transfer', icon: 'i-mdi-bus' },
      { label: 'Turar-joy', icon: 'i-mdi-bed' },
      { label: "Ovqatlanish\ntanlovga mos", icon: 'i-mdi-silverware-fork-knife' },
      { label: "Sug'urta", icon: 'i-mdi-shield-check' },
    ],
  }

  const tourDetail = {
    id: 301,
    title: 'Novotel Rayong Rim Pae Resort',
    location: 'Kao Lak, Tailand',
    roomTitle: 'Terassa va bog\' manzarali standart xona',
    score: '4.2',
    badge: 'Joylar kam qoldi',
    price: 273,
    priceSuffix: 'dan',
    description: 'Novotel Rayong Rim Pae Resort Rayong sohilida joylashgan, 1990 yilda qurilgan va keyinchalik yangilangan resort bo\'lib, tinch hudud va qulay xizmatlari bilan ajralib turadi.',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&fit=crop',
    ],
    dateCards: [
      { label: '17 iyul, pay', value: 'Narxni olish', active: false },
      { label: '18 iyul, ju', value: 'OT 199 463 so\'m', active: false },
      { label: '19 iyul, shan', value: '245$ dan', active: true, badge: 'Eng yaxshi narx' },
      { label: '20 iyul, yak', value: 'OT 186 543 so\'m', active: false },
      { label: '21 iyul, du', value: 'Narxni bilish', active: false },
      { label: '22 iyul, se', value: 'Narxni bilish', active: false },
      { label: '23 iyul, chor', value: 'Narxni bilish', active: false },
    ],
    roomVariants: [
      {
        name: 'Bosh ko\'rinishi yaxshilangan xona',
        meal: 'AI - Barchasi kiritilgan',
        departure: '19 iyul, shan',
        returnDate: '26 iyul, shan',
        nights: 7,
        hotelNights: 6,
        price: 247,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&q=80&fit=crop',
          'https://images.unsplash.com/photo-1501117716987-c8e0a1d9d5f7?w=300&q=80&fit=crop',
        ],
      },
      {
        name: 'Bog\' ko\'rinishidagi xonalar',
        meal: 'BB - Nonushta',
        departure: '19 iyul, shan',
        returnDate: '26 iyul, shan',
        nights: 7,
        hotelNights: 6,
        price: 247,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&q=80&fit=crop',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&q=80&fit=crop',
        ],
      },
      {
        name: 'Bod ko\'rinishli xonalar',
        meal: 'BB - Nonushta',
        departure: '19 iyul, shan',
        returnDate: '26 iyul, shan',
        nights: 7,
        hotelNights: 6,
        price: 247,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&q=80&fit=crop',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&q=80&fit=crop',
        ],
      },
      {
        name: 'Oilaviy suite',
        meal: 'BB - Nonushta',
        departure: '19 iyul, shan',
        returnDate: '26 iyul, shan',
        nights: 7,
        hotelNights: 6,
        price: 247,
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&q=80&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=300&q=80&fit=crop',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?w=300&q=80&fit=crop',
        ],
      },
    ],
    services: [
      {
        icon: 'i-mdi-map-marker',
        title: 'Mehmonxona infratuzilmasi',
        description: "Lift, bog', restoran, ochiq basseyn, kafe, avtoturargoh, spa, resepshn xavfsizlik qutisi va teras.",
      },
      {
        icon: 'i-mdi-briefcase',
        title: 'Biznes xizmatlar',
        description: 'Kseroks, faks, konferens-zal, muzokara xonasi, biznes markaz.',
      },
      {
        icon: 'i-mdi-human-handsup',
        title: 'Xonalardagi qulayliklar',
        description: 'Balkon, dush, mini-bar, televizor, telefon, fen, muzlatgich, internet, konditsioner.',
      },
      {
        icon: 'i-mdi-bell-ring',
        title: 'Mehmonxonadagi xizmatlar',
        description: 'Konsyerj, xonada xizmat, avtomobil ijarasi, velosiped ijarasi, kir yuvish va transfer.',
      },
      {
        icon: 'i-mdi-swim',
        title: 'Plyaj',
        description: 'Shaxsiy plyaj, qumli qirg\'oq, soya va shezlonglar.',
      },
      {
        icon: 'i-mdi-baby-face',
        title: 'Bolalar uchun xizmatlar',
        description: 'Bolalar maydonchasi, o\'yin xonasi, bolalarni parvarish qilish, bolalar basseyn.',
      },
      {
        icon: 'i-mdi-soccer',
        title: 'Sport',
        description: 'Mini-golf, stol tennisi, baliq ovlash, fitnes markaz, suv sportlari.',
      },
      {
        icon: 'i-mdi-spa',
        title: "Go'zallik va salomatlik",
        description: 'Massaj, spa markazi, sauna, gidromassaj vannasi.',
      },
    ],
    highlights: [
      { title: 'Basseynlar', items: ['Sirpanchiqli bolalar basseyni - 1', '2 ta umumiy basseyn'] },
      {
        title: "Mehmonxonaning xususiyatlari",
        items: ['Uy hayvonlarini joylashtirish taqiqlanadi.', 'Harakat cheklangan mehmonlar uchun xonalar - 104', "Bolalar kravati - Bepul", "Qo'shni xonalar: 20 ta.", 'Chekmaydigan mehmonlar uchun xonalar: 125 ta.'],
      },
      { title: 'Joylashuv', items: ['U-Tapao-Pattaya xalqaro aeroportigacha - 74 km', 'Shahar markazigacha - 4,4 km.'] },
    ],
  }

  const bookingSteps = [
    {
      title: 'Turni tanlash',
      description: "Sizni qiziqtirgan turni tanlang. Turni tanlashdan oldin shoshilmang.",
      image: 'https://images.unsplash.com/photo-1502920917128-1aa5007647b8?w=300&q=80&fit=crop',
      badge: 'Siz ushbu jarayondasiz',
    },
    {
      title: "Turistik ma'lumotlar va to'lov ma'lumotlari",
      description: "Kontakt ma'lumotlari, sayohatchilarning ismlari va to'lov ma'lumotlarini kiriting.",
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80&fit=crop',
    },
    {
      title: "Bronlashni yakunlash va hujjatlarni qabul qilish",
      description: "Turoperator bronni tasdiqlaydi va paketni elektron pochta orqali yuboradi.",
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80&fit=crop',
    },
  ]

  const bookingFlights = [
    {
      price: 227,
      nights: 7,
      hotelNights: 6,
      platforms: ['Space Travel', 'Travelata', "Let's Fly"],
      segments: [
        {
          heading: 'MANZILGA',
          logo: 'EKONOM SU284',
          fromCity: 'Toshkent',
          fromTime: '19:10',
          fromDate: '19 iyul, shan',
          fromCode: 'SVO',
          toCity: 'Pxuket',
          toTime: '08:30',
          toDate: '20-iyul, yak',
          toCode: 'HKT',
          duration: '9s 20d parvozda',
          directLabel: "To'g'ridan-to'g'ri",
        },
        {
          heading: 'QAYTISH',
          logo: 'EKONOM SU284',
          fromCity: 'Pxuket',
          fromTime: '21:40',
          fromDate: '26 iyul, shan',
          fromCode: 'HKT',
          toCity: 'Toshkent',
          toTime: '18:05',
          toDate: '27-iyul, yak',
          toCode: 'SVO',
          duration: '24s 25d parvozda',
          directLabel: '1 пересадка',
        },
        ],
      sideNotes: ['7 tunga, ulardan 6 tasi mehmonxonada', '100% to\'lov', 'Jamoaviy transfer', "Tibbiy sug'urta kiritilgan"],
    },
    {
      price: 212,
      nights: 7,
      hotelNights: 6,
      platforms: ['Space Travel', 'Travelata'],
      segments: [
        {
          heading: 'MANZILGA',
          logo: 'EKONOM SU284',
          fromCity: 'Toshkent',
          fromTime: '19:10',
          fromDate: '19 iyul, shan',
          fromCode: 'SVO',
          toCity: 'Pxuket',
          toTime: '08:30',
          toDate: '20-iyul, yak',
          toCode: 'HKT',
          duration: '9s 20d parvozda',
          directLabel: "To'g'ridan-to'g'ri",
        },
        {
          heading: 'QAYTISH',
          logo: 'EKONOM SU284',
          fromCity: 'Pxuket',
          fromTime: '10:35',
          fromDate: '26 iyul, shan',
          fromCode: 'HKT',
          toCity: 'Toshkent',
          toTime: '16:35',
          toDate: '26-iyul, c6',
          toCode: 'SVO',
          duration: '10s 0d parvozda',
          directLabel: "To'g'ridan-to'g'ri",
        },
      ],
      sideNotes: ['7 tunga, ulardan 6 tasi mehmonxonada', '100% to\'lov', 'Jamoaviy transfer', "Tibbiy sug'urta kiritilgan"],
    },
  ]

  const passengerForm = {
    adults: [
      {
        title: 'Kattalar',
        citizenship: "O'zbekiston",
        firstName: 'Abdullaev',
        lastName: 'Farruh',
        documentType: 'Boshqa hujjat',
        documentNumber: 'AB5441433',
        birthDate: '02 / 08 / 1999',
        expiryDate: '12 / 20 / 2026',
      },
    ],
    contact: {
      email: 'example@email.com',
      phone: '+998 90 123 45 67',
    },
    smsPrice: '360 so\'m',
  }

  const paymentMethod = {
    cards: ['mastercard', 'visa'],
    extras: ['Uzcard', 'Humo', 'Payme', 'Click', 'Stripe'],
    summary: {
      tickets: '0 so\'m',
      total: '227$',
      fee: '0 so\'m',
    },
  }

  return {
    bookingFlights,
    bookingSteps,
    passengerForm,
    paymentMethod,
    resultInclusion,
    searchHero,
    searchResults,
    searchSummary,
    sidebarBlocks,
    tourDetail,
  }
}
