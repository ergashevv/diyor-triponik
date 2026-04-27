export default defineEventHandler(async (event) => {
  const { location, pickupDate, returnDate } = getQuery(event) as { location: string, pickupDate: string, returnDate: string }

  // Using the requested car.svg asset for all results
  const cars = [
    {
      id: 1,
      name: 'Hyundai Solaris',
      description: 'Avtomat transmissiya, Konditsioner',
      image: '/images/cars/car-image.png',
      price: '82.90',
      capacity: 3,
      bags: 4,
      stars: 5,
      type: 'Ekonom'
    },
    {
      id: 2,
      name: 'Evolute I-JOY',
      description: 'Avtomat transmissiya, Konditsioner, electrocar',
      image: '/images/cars/car-image.png',
      price: '115.00',
      capacity: 5,
      bags: 2,
      stars: 4,
      type: 'Biznes'
    },
    {
      id: 3,
      name: 'Peugeot 408',
      description: 'Avtomat transmissiya, Konditsioner, Premium dizayn',
      image: '/images/cars/car-image.png',
      price: '145.50',
      capacity: 3,
      bags: 1,
      stars: 5,
      type: 'Premium'
    },
    {
      id: 4,
      name: 'Hyundai Solaris',
      description: 'Avtomat transmissiya, Konditsioner, Komfort tanlov',
      image: '/images/cars/car-image.png',
      price: '82.90',
      capacity: 3,
      bags: 4,
      stars: 5,
      type: 'Ekonom'
    }
  ]

  return cars
})
