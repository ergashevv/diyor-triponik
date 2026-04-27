export const destinations = [
  { id: 1, name: 'Istanbul', country: 'Turkiya', flag: '🇹🇷', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', price: 4250000, type: 'CITY', months: 'May - Sentabr', duration: '5 soat' },
  { id: 2, name: 'Dubai', country: 'BAA', flag: '🇦🇪', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', price: 6780000, type: 'CITY', months: 'Aprel - Oktyabr', duration: '4 soat' },
  { id: 3, name: 'Bangkok', country: 'Tailand', flag: '🇹🇭', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800', price: 3780000, type: 'CITY', months: 'Iyun - Avgust', duration: '7 soat' },
  { id: 4, name: 'Parij', country: 'Fransiya', flag: '🇫🇷', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', price: 8500000, type: 'CITY', months: 'May - Sentabr', duration: '6 soat' },
  { id: 5, name: 'Antalya', country: 'Turkiya', flag: '🇹🇷', image: 'https://images.unsplash.com/photo-15420518418c7-4737bfa06631?w=800', price: 3500000, type: 'RESORT', months: 'Iyun - Avgust', duration: '4 soat' },
  { id: 6, name: 'Bali', country: 'Indoneziya', flag: '🇮🇩', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', price: 7200000, type: 'ISLAND', months: 'Aprel - Noyabr', duration: '9 soat' },
  { id: 7, name: 'Toshkent', country: 'O\'zbekiston', flag: '🇺🇿', image: 'https://images.unsplash.com/photo-1528510138833-93cf2524bc09?w=800', price: 500000, type: 'CITY', months: 'Yil bo\'yi', duration: '1 soat' },
  { id: 8, name: 'Samarqand', country: 'O\'zbekiston', flag: '🇺🇿', image: 'https://images.unsplash.com/photo-1580661869111-e7345638a168?w=800', price: 450000, type: 'CITY', months: 'Mart - Noyabr', duration: '1 soat' },
  { id: 9, name: 'London', country: 'Buyuk Britaniya', flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', price: 9200000, type: 'CITY', months: 'Iyun - Avgust', duration: '7 soat' },
  { id: 10, name: 'Tokio', country: 'Yaponiya', flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', price: 11000000, type: 'CITY', months: 'Mart - May', duration: '10 soat' },
  { id: 11, name: 'Rim', country: 'Italiya', flag: '🇮🇹', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', price: 7800000, type: 'CITY', months: 'Aprel - Iyun', duration: '6 soat' },
  { id: 12, name: 'Maldiv', country: 'Maldiv orollari', flag: '🇲🇻', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', price: 15000000, type: 'ISLAND', months: 'Noyabr - Aprel', duration: '5 soat' },
]

export const hotels = [
  { code: 'H1', name: 'Hilton Garden Inn', categoryName: '4*', minRate: 120, maxRate: 350, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }], address: 'Amir Temur ko\'chasi, Toshkent', city: 'Toshkent', rating: 4.5, reviewCount: 1240 },
  { code: 'H2', name: 'Hyatt Regency Tashkent', categoryName: '5*', minRate: 250, maxRate: 800, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800' }], address: 'Navoiy ko\'chasi, Toshkent', city: 'Toshkent', rating: 4.8, reviewCount: 3100 },
  { code: 'H3', name: 'Burj Al Arab', categoryName: '7*', minRate: 1500, maxRate: 5000, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' }], address: 'Jumeirah St, Dubai', city: 'Dubai', rating: 5.0, reviewCount: 15000 },
  { code: 'H4', name: 'Atlantis The Palm', categoryName: '5*', minRate: 450, maxRate: 1200, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800' }], address: 'Crescent Rd, Dubai', city: 'Dubai', rating: 4.7, reviewCount: 8900 },
  { code: 'H5', name: 'The Ritz-Carlton Paris', categoryName: '5*', minRate: 900, maxRate: 2500, currency: 'EUR', images: [{ path: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800' }], address: '15 Pl. Vendôme, Paris', city: 'Paris', rating: 4.9, reviewCount: 5600 },
  { code: 'H6', name: 'Pullman Istanbul Hotel', categoryName: '5*', minRate: 180, maxRate: 450, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800' }], address: 'Yenibosna Merkez, Istanbul', city: 'Istanbul', rating: 4.4, reviewCount: 2200 },
  { code: 'H7', name: 'Hotel Winterfell Tverskaya', categoryName: '3*', minRate: 45, maxRate: 120, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800' }], address: 'Staropimenovskij pereulok, 6, Moskva', city: 'Moskva', rating: 3.8, reviewCount: 850 },
  { code: 'H8', name: 'Sheraton Rome Hotel', categoryName: '4*', minRate: 210, maxRate: 500, currency: 'EUR', images: [{ path: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800' }], address: 'Viale del Pattinaggio, 100, Roma', city: 'Roma', rating: 4.2, reviewCount: 1800 },
  // Expanded Data
  { code: 'H9', name: 'Rixos Premium Belek', categoryName: '5*', minRate: 350, maxRate: 1200, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800' }], address: 'Belek, Antalya', city: 'Antalya', rating: 4.9, reviewCount: 4500 },
  { code: 'H10', name: 'Four Seasons Resort Bali', categoryName: '5*', minRate: 600, maxRate: 2000, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' }], address: 'Sayan, Ubud, Bali', city: 'Bali', rating: 4.9, reviewCount: 3200 },
  { code: 'H11', name: 'Marina Bay Sands', categoryName: '5*', minRate: 450, maxRate: 1500, currency: 'SGD', images: [{ path: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800' }], address: '10 Bayfront Ave, Singapore', city: 'Singapore', rating: 4.7, reviewCount: 25000 },
  { code: 'H12', name: 'The Savoy London', categoryName: '5*', minRate: 800, maxRate: 3000, currency: 'GBP', images: [{ path: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' }], address: 'Strand, London', city: 'London', rating: 4.8, reviewCount: 7800 },
  { code: 'H13', name: 'Conrad Istanbul Bosphorus', categoryName: '5*', minRate: 220, maxRate: 600, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' }], address: 'Besiktas, Istanbul', city: 'Istanbul', rating: 4.6, reviewCount: 5400 },
  { code: 'H14', name: 'Aman Tokyo', categoryName: '5*', minRate: 1100, maxRate: 4000, currency: 'JPY', images: [{ path: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' }], address: 'Chiyoda City, Tokyo', city: 'Tokyo', rating: 4.9, reviewCount: 1200 },
  { code: 'H15', name: 'Grand Hotel Tremezzo', categoryName: '5*', minRate: 700, maxRate: 2500, currency: 'EUR', images: [{ path: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }], address: 'Lake Como, Italy', city: 'Rome', rating: 4.9, reviewCount: 3100 },
  { code: 'H16', name: 'Radisson Blu Hotel, Tashkent', categoryName: '4*', minRate: 140, maxRate: 300, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1596394516093-501ba68a0601?w=800' }], address: 'Amir Temur ko\'chasi, Toshkent', city: 'Toshkent', rating: 4.3, reviewCount: 1560 },
  { code: 'H17', name: 'InterContinental Phuket Resort', categoryName: '5*', minRate: 320, maxRate: 900, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' }], address: 'Kamala Beach, Phuket', city: 'Bangkok', rating: 4.7, reviewCount: 2100 },
  { code: 'H18', name: 'W Doha', categoryName: '5*', minRate: 280, maxRate: 1100, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800' }], address: 'West Bay, Doha', city: 'Doha', rating: 4.6, reviewCount: 4300 },
  { code: 'H19', name: 'Fairmont Baku, Flame Towers', categoryName: '5*', minRate: 190, maxRate: 750, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800' }], address: 'Mehdi Huseyn St, Baku', city: 'Baku', rating: 4.5, reviewCount: 3800 },
  { code: 'H20', name: 'Steigenberger Alcazar', categoryName: '5*', minRate: 240, maxRate: 850, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800' }], address: 'Nabq Bay, Sharm El Sheikh', city: 'Sharm El Sheikh', rating: 4.8, reviewCount: 9200 },
  { code: 'H21', name: 'Mandalay Bay', categoryName: '4*', minRate: 160, maxRate: 600, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }], address: 'Las Vegas Blvd, USA', city: 'New York', rating: 4.2, reviewCount: 18000 },
  { code: 'H22', name: 'Shangri-La Kuala Lumpur', categoryName: '5*', minRate: 150, maxRate: 450, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' }], address: 'Jalan Sultan Ismail, KL', city: 'Kuala Lumpur', rating: 4.6, reviewCount: 6700 },
  { code: 'H23', name: 'Biltmore Hotel Tbilisi', categoryName: '5*', minRate: 210, maxRate: 800, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800' }], address: 'Rustaveli Ave, Tbilisi', city: 'Tbilisi', rating: 4.7, reviewCount: 2900 },
  { code: 'H24', name: 'Wyndham Tashkent', categoryName: '4*', minRate: 110, maxRate: 280, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800' }], address: 'Tashkent', city: 'Toshkent', rating: 4.1, reviewCount: 1200 },
  { code: 'H25', name: 'Registan Plaza', categoryName: '4*', minRate: 90, maxRate: 180, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1580661869111-e7345638a168?w=800' }], address: 'Samarqand', city: 'Samarqand', rating: 4.2, reviewCount: 840 },
  { code: 'H26', name: 'Dilimah Premium Luxury', categoryName: '5*', minRate: 160, maxRate: 400, currency: 'USD', images: [{ path: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800' }], address: 'Samarqand', city: 'Samarqand', rating: 4.9, reviewCount: 1100 },
]

export const tours = [
  { id: 1, name: 'Shveytsariya Alplari', country: 'Shveytsariya', rating: 4.8, price: 950, days: 7, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', tags: ['mountain', 'nature', 'all'], description: 'Go\'zal Alp tog\'lari bo\'ylab unutilmas sayohat.', score: 9.2, stars: 5, distanceBeach: 'Yo\'q', distanceAirport: '45 km', bookings: 'Haftada 3 ta bron', updatedAt: '2 soat oldin' },
  { id: 2, name: 'Kappadokiya Mo\'jizasi', country: 'Turkiya', rating: 4.9, price: 850, days: 5, image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800', tags: ['nature', 'city', 'all'], description: 'Havo sharlarida uchish va g\'aroyib g\'or-shaharlarni kashf etish.', score: 9.5, stars: 4, distanceBeach: 'Yo\'q', distanceAirport: '20 km', bookings: 'Bugun 5 marta bron qilindi', updatedAt: '15 daqiqa oldin' },
  { id: 3, name: 'Santorini Quyoshi', country: 'Gretsiya', rating: 4.7, price: 750, days: 6, image: 'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=800', tags: ['beach', 'city', 'all'], description: 'Oq-ko\'k uylar va Egey dengizi sohili.', score: 8.9, stars: 5, distanceBeach: '100 m', distanceAirport: '15 km', bookings: 'Oyda 24 ta bron', updatedAt: '1 kun oldin' },
  { id: 4, name: 'Bali - Jannatmonand', country: 'Indoneziya', rating: 4.9, price: 780, days: 8, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', tags: ['beach', 'nature', 'all'], description: 'Tropik o\'rmonlar va cheksiz okean.', score: 9.8, stars: 5, distanceBeach: '20 m', distanceAirport: '35 km', bookings: 'Hozir 2 kishi ko\'rmoqda', updatedAt: '5 daqiqa oldin' },
  { id: 5, name: 'Istanbul Siri', country: 'Turkiya', rating: 4.6, price: 620, days: 5, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', tags: ['city', 'all'], description: 'Ikki qit\'a birlashgan shahar bo\'ylab tarixiy sayohat.', score: 8.7, stars: 4, distanceBeach: '1 km', distanceAirport: '30 km', bookings: 'Juda ko\'p bron qilinadi', updatedAt: '3 soat oldin' },
  { id: 6, name: 'Arktika Chiroqlari', country: 'Islandiya', rating: 4.9, price: 2100, days: 6, image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800', tags: ['nature', 'mountain', 'all'], description: 'Shimol yog\'dusini o\'z ko\'zingiz bilan ko\'ring.', score: 9.9, stars: 5, distanceBeach: 'Yo\'q', distanceAirport: '50 km', bookings: 'Eksklyuziv tur', updatedAt: '12 soat oldin' },
  { id: 7, name: 'Parij Romantikasi', country: 'Fransiya', rating: 4.8, price: 1200, days: 4, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', tags: ['city', 'all'], description: 'Eyfel minorasi va Luvr bo\'ylab romantik sayohat.', score: 9.3, stars: 5, distanceBeach: 'Yo\'q', distanceAirport: '25 km', bookings: 'Eng ko\'p sotilgan', updatedAt: 'Yaqinda' },
  { id: 8, name: 'Tokio - Kelajak Shahri', country: 'Yaponiya', rating: 4.9, price: 2500, days: 10, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', tags: ['city', 'nature', 'all'], description: 'Zamonaviy texnologiyalar va qadimiy urf-odatlar uyg\'unligi.', score: 9.9, stars: 5, distanceBeach: '5 km', distanceAirport: '40 km', bookings: 'Premium tanlov', updatedAt: '1 soat oldin' },
  // Expanded Tours
  { id: 9, name: 'London Ko\'zlari', country: 'Britaniya', rating: 4.7, price: 1100, days: 5, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', tags: ['city', 'all'], description: 'Temza daryosi va tarixiy London.', score: 9.1, stars: 4, distanceBeach: 'Yo\'q', distanceAirport: '20 km', bookings: 'Mashhur', updatedAt: '3 soat oldin' },
  { id: 10, name: 'Rim Imperiyasi', country: 'Italiya', rating: 4.8, price: 980, days: 6, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', tags: ['city', 'all'], description: 'Kolizey va Vatikan sirlari.', score: 9.4, stars: 5, distanceBeach: 'Yo\'q', distanceAirport: '30 km', bookings: 'Tarixiy tur', updatedAt: '5 soat oldin' },
  { id: 11, name: 'Maldiv Relax', country: 'Maldiv', rating: 5.0, price: 1800, days: 7, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', tags: ['beach', 'all'], description: 'Faqat siz va okean.', score: 10.0, stars: 5, distanceBeach: '5 m', distanceAirport: 'Boat transfer', bookings: 'Asal oyi uchun', updatedAt: 'Hozir' },
  { id: 12, name: 'Samarqand Afsonasi', country: 'O\'zbekiston', rating: 4.9, price: 400, days: 3, image: 'https://images.unsplash.com/photo-1580661869111-e7345638a168?w=800', tags: ['city', 'all'], description: 'Registon va tillakori mo\'jizalari.', score: 9.8, stars: 4, distanceBeach: 'Yo\'q', distanceAirport: '10 km', bookings: 'Mahalliy tanlov', updatedAt: '2 soat oldin' },
  { id: 13, name: 'Antalya Sohili', country: 'Turkiya', rating: 4.6, price: 550, days: 7, image: 'https://images.unsplash.com/photo-15420518418c7-4737bfa06631?w=800', tags: ['beach', 'all'], description: 'Oila uchun eng yaxshi hordiq.', score: 8.5, stars: 4, distanceBeach: '10 m', distanceAirport: '15 km', bookings: 'Oilaviy', updatedAt: '6 soat oldin' },
  { id: 14, name: 'Baku Olovlari', country: 'Ozarbayjon', rating: 4.7, price: 480, days: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', tags: ['city', 'all'], description: 'Kaspian dengizi va zamonaviy arxitektura.', score: 9.0, stars: 4, distanceBeach: '500 m', distanceAirport: '25 km', bookings: 'Qulay', updatedAt: '4 soat oldin' },
  { id: 15, name: 'Phuket Sarguzashti', country: 'Tailand', rating: 4.8, price: 820, days: 8, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', tags: ['beach', 'nature', 'all'], description: 'Katta Budda va ko\'k suvlar.', score: 9.2, stars: 5, distanceBeach: '20 m', distanceAirport: '40 km', bookings: 'Ekstremal', updatedAt: '8 soat oldin' },
  { id: 16, name: 'Praga Ko\'priklari', country: 'Chexiya', rating: 4.8, price: 740, days: 5, image: 'https://images.unsplash.com/photo-1528510138833-93cf2524bc09?w=800', tags: ['city', 'all'], description: 'Ertaknamo shahar bo\'ylab sayohat.', score: 9.3, stars: 4, distanceBeach: 'Yo\'q', distanceAirport: '20 km', bookings: 'Ertaknamo', updatedAt: '12 soat oldin' },
]

export const carClasses = [
  { id: 1, name: 'Standart', models: "KIA Cerato, Chery Tiggo yoki shunga o'xshash", capacity: 3, notice: 6, price: 82.90, image: '/assets/images/car.svg' },
  { id: 2, name: 'Komfort', models: "Toyota Camry, KIA K5 yoki shunga o'xshash", capacity: 3, notice: 6, price: 98.95, image: '/assets/images/car.svg' },
  { id: 3, name: 'Premium', models: "BMW 5, Mercedes E-klass yoki shunga o'xshash", capacity: 3, notice: 12, price: 149.00, image: '/assets/images/car.svg' },
  { id: 4, name: 'Miniven', models: "Mercedes Vito, Volkswagen Caravelle yoki shunga o'xshash", capacity: 7, notice: 24, price: 185.00, image: '/assets/images/car.svg' },
  { id: 5, name: 'Biznes Miniven', models: "Toyota Alphard, Hyundai Staria yoki shunga o'xshash", capacity: 6, notice: 24, price: 245.00, image: '/assets/images/car.svg' },
  { id: 6, name: 'Ekonom', models: "Chevrolet Gentra, Cobalt yoki shunga o'xshash", capacity: 3, notice: 4, price: 45.00, image: '/assets/images/car.svg' },
  { id: 7, name: 'SUV', models: "Chevrolet Tahoe, Kia Sorento yoki shunga o'xshash", capacity: 5, notice: 12, price: 120.00, image: '/assets/images/car.svg' },
  { id: 8, name: 'Lyuks', models: "Mercedes S-Class, Range Rover yoki shunga o'xshash", capacity: 3, notice: 24, price: 450.00, image: '/assets/images/car.svg' },
]

export const flights = [
  {
    id: 'F1',
    carrierName: 'Uzbekistan Airways',
    carrierCode: 'HY',
    price: { total: 450, currency: 'USD' },
    itineraries: [
      {
        duration: 'PT3H30M',
        segments: [
          {
            departure: { iataCode: 'TAS', at: '2024-12-01T08:00:00' },
            arrival: { iataCode: 'DXB', at: '2024-12-01T11:30:00' },
            carrierCode: 'HY',
            number: '333',
            aircraftName: 'Boeing 787'
          }
        ]
      }
    ]
  },
  {
    id: 'F2',
    carrierName: 'Turkish Airlines',
    carrierCode: 'TK',
    price: { total: 520, currency: 'USD' },
    itineraries: [
      {
        duration: 'PT5H00M',
        segments: [
          {
            departure: { iataCode: 'TAS', at: '2024-12-01T02:45:00' },
            arrival: { iataCode: 'IST', at: '2024-12-01T07:45:00' },
            carrierCode: 'TK',
            number: '371',
            aircraftName: 'Airbus A330'
          }
        ]
      }
    ]
  },
  {
    id: 'F3',
    carrierName: 'FlyDubai',
    carrierCode: 'FZ',
    price: { total: 380, currency: 'USD' },
    itineraries: [
      {
        duration: 'PT3H45M',
        segments: [
          {
            departure: { iataCode: 'TAS', at: '2024-12-01T12:00:00' },
            arrival: { iataCode: 'DXB', at: '2024-12-01T15:45:00' },
            carrierCode: 'FZ',
            number: '1942',
            aircraftName: 'Boeing 737 MAX'
          }
        ]
      }
    ]
  },
  {
    id: 'F4',
    carrierName: 'Air Astana',
    carrierCode: 'KC',
    price: { total: 290, currency: 'USD' },
    itineraries: [
      {
        duration: 'PT1H30M',
        segments: [
          {
            departure: { iataCode: 'TAS', at: '2024-12-01T19:00:00' },
            arrival: { iataCode: 'ALA', at: '2024-12-01T20:30:00' },
            carrierCode: 'KC',
            number: '128',
            aircraftName: 'Airbus A321'
          }
        ]
      }
    ]
  }
]
