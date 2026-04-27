export default defineEventHandler(async () => {
  return [
    {
      reference: '955288909',
      code: '588670936',
      hotelName: 'Hotel Winterfell Tverskaya',
      phone: '+7 495 545 41 61',
      address: 'Staropimenovskij pereulok, 6, Moskva',
      location: 'Moskva, Rossiya',
      rooms: 1,
      guests: 2,
      checkIn: '14:00',
      checkOut: '12:00',
      checkInDate: '2025-05-17',
      checkOutDate: '2025-05-18',
      price: 4090,
      currency: '₽',
      status: 'cancelled',
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800'
      ],
      details: {
        roomType: 'Dvulxmestniy nomer',
        breakfast: 'Kiritilmagan',
        cancellation: 'Bepul bekor qilish muddati tugagan'
      }
    },
    {
      reference: '123456789',
      code: '987654321',
      hotelName: 'Hilton Garden Inn',
      phone: '+998 71 200 00 00',
      address: 'Amir Temur ko\'chasi, Toshkent',
      location: 'Toshkent, O\'zbekiston',
      rooms: 1,
      guests: 2,
      checkIn: '14:00',
      checkOut: '12:00',
      checkInDate: '2025-06-10',
      checkOutDate: '2025-06-15',
      price: 1250000,
      currency: 'UZS',
      status: 'confirmed',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'
      ],
      details: {
        roomType: 'Deluxe King Room',
        breakfast: 'Kiritilgan',
        cancellation: 'Bepul bekor qilish 8-iyungacha'
      }
    },
    {
      reference: '888777666',
      code: '333222111',
      hotelName: 'Burj Al Arab',
      phone: '+971 4 301 7777',
      address: 'Jumeirah Street, Dubai',
      location: 'Dubai, BAA',
      rooms: 1,
      guests: 2,
      checkIn: '15:00',
      checkOut: '12:00',
      checkInDate: '2025-08-20',
      checkOutDate: '2025-08-25',
      price: 2500,
      currency: '$',
      status: 'confirmed',
      images: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800'
      ],
      details: {
        roomType: 'Royal Suite',
        breakfast: 'Kiritilgan (VIP)',
        cancellation: 'Bekor qilib bo\'lmaydi'
      }
    }
  ]
})
