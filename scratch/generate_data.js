const cities = ['Istanbul', 'Dubai', 'Antalya', 'Bali', 'Tashkent', 'Samarkand', 'London', 'Paris', 'Tokyo', 'Rome', 'Bangkok', 'Singapore', 'Male', 'New York', 'Doha', 'Baku', 'Sharm El Sheikh', 'Phuket', 'Kuala Lumpur', 'Tbilisi'];
const countries = ['Turkiya', 'BAA', 'Turkiya', 'Indoneziya', 'O\'zbekiston', 'O\'zbekiston', 'Britaniya', 'Fransiya', 'Yaponiya', 'Italiya', 'Tailand', 'Singapur', 'Maldiv', 'AQSH', 'Qatar', 'Ozarbayjon', 'Misr', 'Tailand', 'Malayziya', 'Gruziya'];

const hotelImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
  'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
  'https://images.unsplash.com/photo-1541976590-713941681591?w=800',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
  'https://images.unsplash.com/photo-1596394516093-501ba68a0601?w=800'
];

const hotelNames = ['Grand', 'Regency', 'Palace', 'Resort', 'Plaza', 'Suites', 'Gardens', 'View', 'Royal', 'Continental'];
const hotelBrands = ['Hilton', 'Marriott', 'Hyatt', 'Sheraton', 'Radisson', 'InterContinental', 'Wyndham', 'Accor', 'Novotel', 'Rixos'];

const generatedHotels = [];
for (let i = 1; i <= 60; i++) {
  const cityIndex = i % cities.length;
  const brand = hotelBrands[i % hotelBrands.length];
  const suffix = hotelNames[i % hotelNames.length];
  generatedHotels.push({
    code: `GH${i}`,
    name: `${brand} ${suffix} ${cities[cityIndex]}`,
    categoryName: `${(i % 3) + 3}*`,
    minRate: 50 + (i * 5) % 400,
    maxRate: 150 + (i * 10) % 1000,
    currency: 'USD',
    images: [{ path: hotelImages[i % hotelImages.length] }],
    address: `${brand} Street, ${cities[cityIndex]}`,
    city: cities[cityIndex],
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 5000) + 10
  });
}

const tourImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800',
  'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=800',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
  'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
  'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  'https://images.unsplash.com/photo-1528510138833-93cf2524bc09?w=800',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
  'https://images.unsplash.com/photo-1500382017468-9049fee74a62?w=800'
];

const generatedTours = [];
const tourTags = [['beach', 'all'], ['nature', 'all'], ['city', 'all'], ['mountain', 'all'], ['luxury', 'all'], ['budget', 'all']];
for (let i = 1; i <= 40; i++) {
  const cityIndex = i % cities.length;
  generatedTours.push({
    id: i + 10,
    name: `${cities[cityIndex]} Highlights`,
    country: countries[cityIndex],
    rating: (Math.random() * 1 + 4).toFixed(1),
    price: 300 + (i * 20) % 2000,
    days: (i % 7) + 3,
    image: tourImages[i % tourImages.length],
    tags: tourTags[i % tourTags.length],
    description: `Kashf etilmagan ${cities[cityIndex]} bo'ylab unutilmas sarguzasht.`,
    score: (Math.random() * 2 + 8).toFixed(1),
    stars: (i % 2) + 4,
    distanceBeach: i % 3 === 0 ? '50 m' : 'Yo\'q',
    distanceAirport: `${(i % 50) + 5} km`,
    bookings: `${Math.floor(Math.random() * 50)} ta bron`,
    updatedAt: `${i} soat oldin`
  });
}

console.log('--- HOTELS ---');
console.log(JSON.stringify(generatedHotels, null, 2));
console.log('--- TOURS ---');
console.log(JSON.stringify(generatedTours, null, 2));
