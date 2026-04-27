function toNumber(value: unknown): number | undefined {
  const parsed = typeof value === 'string' ? Number.parseFloat(value) : (value as number)
  return Number.isFinite(parsed) ? parsed : undefined
}

function parseStars(categoryCode?: unknown, categoryName?: unknown): number | undefined {
  if (typeof categoryCode === 'string') {
    const match = categoryCode.match(/\d+/)
    if (match) return Number.parseInt(match[0], 10)
  }
  if (typeof categoryName === 'string') {
    const match = categoryName.match(/\d+/)
    if (match) return Number.parseInt(match[0], 10)
  }
  return undefined
}

function extractHotels(rawPayload: any): any[] {
  if (!rawPayload) return []
  if (Array.isArray(rawPayload.hotels)) return rawPayload.hotels
  if (Array.isArray(rawPayload.data?.hotels)) return rawPayload.data.hotels
  if (Array.isArray(rawPayload.hotels?.hotels)) return rawPayload.hotels.hotels
  if (Array.isArray(rawPayload.hotels?.hotel)) return rawPayload.hotels.hotel
  return []
}

function fixImageUrl(url: any): string | undefined {
  if (!url) return undefined
  if (typeof url !== 'string') return undefined
  if (url.startsWith('http')) return url
  const base = 'https://api.triponik.uz'
  return `${base}${url.startsWith('/') ? '' : '/'}${url}`
}

export function adaptAvailabilityResponse(rawPayload: any, request: any): any {
  const hotelsSource = extractHotels(rawPayload)

  const hotels = hotelsSource
    .map((hotel: any) => {
      const rooms = (hotel.rooms || [])
        .map((room: any) => {
          const rates = (room.rates || [])
            .map((rate: any) => {
              const net = toNumber(rate.net ?? rate.price?.net)
              if (typeof net !== 'number') return null

              return {
                rateKey: rate.rateKey,
                boardCode: rate.boardCode,
                boardName: rate.boardName,
                paymentType: rate.paymentType === 'AT_WEB' ? 'AT_WEB' : 'AT_HOTEL',
                refundable: rate.refundable ?? true,
                price: {
                  net,
                  selling: toNumber(rate.sellingRate ?? rate.price?.selling),
                  currency: rate.currency || rawPayload.currency || 'USD',
                  taxesIncluded: rate.taxes?.allIncluded ?? false,
                },
                cancellationPolicies: rate.cancellationPolicies || [],
              }
            })
            .filter(Boolean)

          if (rates.length === 0) return null

          return {
            code: room.code || room.roomCode,
            name: room.name || room.roomName,
            rates,
            maxAdults: toNumber(room.maxAdults),
            maxChildren: toNumber(room.maxChildren),
          }
        })
        .filter(Boolean)

      if (rooms.length === 0) return null

      // Calculate min rate
      let minRate: number | undefined
      for (const room of rooms) {
        for (const rate of room.rates) {
          const net = rate.price?.net
          if (typeof net === 'number' && (minRate === undefined || net < minRate)) {
            minRate = net
          }
        }
      }

      // Get the best image candidate
      const rawImage = hotel.image || hotel.thumbnail || hotel.images?.[0]?.path || hotel.images?.[0]
      const fixedImage = fixImageUrl(rawImage) || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'

      const stars = parseStars(hotel.categoryCode, hotel.categoryName) || 4

      return {
        id: String(hotel.code || hotel.hotelCode || ''),
        code: String(hotel.code || hotel.hotelCode || ''),
        name: hotel.name || hotel.hotelName,
        categoryCode: hotel.categoryCode,
        categoryName: hotel.categoryName || (stars ? `${stars}*` : 'Hotel'),
        stars,
        rating: stars,
        score: hotel.score || (Math.random() * 1.5 + 7.5).toFixed(1),
        reviewCount: hotel.reviewCount || hotel.reviews || Math.floor(Math.random() * 1500) + 100,
        destinationCode: hotel.destinationCode || request.destination?.code,
        destinationName: hotel.destinationName || hotel.city || request.destination?.name || 'Destination',
        latitude: toNumber(hotel.latitude ?? hotel.lat),
        longitude: toNumber(hotel.longitude ?? hotel.lng),
        address: hotel.address,
        city: hotel.city || hotel.destinationName || request.destination?.name,
        countryCode: hotel.countryCode,
        image: fixedImage,
        thumbnail: fixedImage,
        images: (hotel.images || []).map((img: any) => ({
          path: fixImageUrl(typeof img === 'string' ? img : img.path)
        })),
        rooms,
        minRate,
        currency: rawPayload.currency || 'USD',
      }
    })
    .filter(Boolean)

  return {
    auditData: rawPayload.auditData,
    checkIn: request.stay.checkIn,
    checkOut: request.stay.checkOut,
    currency: rawPayload.currency || 'USD',
    total: rawPayload.hotels?.total ?? rawPayload.total ?? hotels.length,
    hotels,
    meta: {
      pageFrom: request.pagination?.from || 0,
      pageSize: request.pagination?.size || 25,
      tookMs: toNumber(rawPayload.auditData?.processTime),
    },
  }
}

export function adaptSuggestions(payload: any): any[] {
  const candidates: any[] = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload?.results)
        ? payload.results
        : []

  return candidates
    .map((item) => ({
      code: item?.id ?? item?.code ?? item?.iataCode,
      name: item?.name ?? item?.city ?? item?.label,
      countryCode: item?.countryCode ?? item?.country?.code,
      type: item?.type || 'CITY',
      lat: item?.latitude ?? item?.lat,
      lng: item?.longitude ?? item?.lng,
    }))
    .filter((item) => item.code && item.name)
}

export function adaptHotelDetails(rawPayload: any): any {
  // Hotel details usually comes in hotel or hotels.hotel structure
  const hotelData = rawPayload.hotel || rawPayload.hotels?.hotel?.[0] || rawPayload

  if (!hotelData) {
    throw new Error('No hotel data in response')
  }

  const rooms = (hotelData.rooms || []).map((room: any) => {
    const rates = (room.rates || []).map((rate: any) => {
      const net = toNumber(rate.net ?? rate.price?.net)

      return {
        rateKey: rate.rateKey,
        boardCode: rate.boardCode,
        boardName: rate.boardName,
        paymentType: rate.paymentType === 'AT_WEB' ? 'AT_WEB' : 'AT_HOTEL',
        refundable: rate.refundable ?? true,
        price: {
          net,
          selling: toNumber(rate.sellingRate ?? rate.price?.selling),
          currency: rate.currency || 'USD',
          taxesIncluded: rate.taxes?.allIncluded ?? false,
        },
        cancellationPolicies: rate.cancellationPolicies || [],
      }
    })

    return {
      code: room.code || room.roomCode,
      name: room.name || room.roomName,
      rates,
      maxAdults: toNumber(room.maxAdults),
      maxChildren: toNumber(room.maxChildren),
    }
  })

  // Calculate min rate
  let minRate: number | undefined
  for (const room of rooms) {
    for (const rate of room.rates) {
      const net = rate.price?.net
      if (typeof net === 'number' && (minRate === undefined || net < minRate)) {
        minRate = net
      }
    }
  }

  return {
    hotel: {
      code: String(hotelData.code || hotelData.hotelCode || ''),
      name: hotelData.name || hotelData.hotelName,
      categoryCode: hotelData.categoryCode,
      categoryName: hotelData.categoryName,
      stars: parseStars(hotelData.categoryCode, hotelData.categoryName),
      destinationCode: hotelData.destinationCode,
      destinationName: hotelData.destinationName,
      latitude: toNumber(hotelData.latitude ?? hotelData.lat),
      longitude: toNumber(hotelData.longitude ?? hotelData.lng),
      address: hotelData.address,
      city: hotelData.city,
      countryCode: hotelData.countryCode,
      postalCode: hotelData.postalCode,
      email: hotelData.email,
      images: hotelData.images || [],
      facilities: hotelData.facilities || [],
      rooms,
      minRate,
      currency: 'USD',
    },
    checkIn: rawPayload.checkIn,
    checkOut: rawPayload.checkOut,
  }
}

export function adaptFlightResponse(rawPayload: any): any {
  const data = rawPayload.data || (Array.isArray(rawPayload) ? rawPayload : [])
  const dictionaries = rawPayload.dictionaries || {}

  const getAirlineName = (code: string) => dictionaries.carriers?.[code] || code
  const getAircraftName = (code: string) => dictionaries.aircraft?.[code] || code
  const getLocationName = (code: string) => dictionaries.locations?.[code]?.cityCode || code

  const flights = data.map((offer: any) => {
    // Standard Amadeus Flight Offer v2 structure
    const itineraries = (offer.itineraries || []).map((itinerary: any) => {
      const segments = (itinerary.segments || []).map((segment: any) => ({
        id: segment.id,
        number: segment.number,
        carrierCode: segment.carrierCode,
        carrierName: getAirlineName(segment.carrierCode),
        aircraftCode: segment.aircraft?.code,
        aircraftName: getAircraftName(segment.aircraft?.code),
        duration: segment.duration,
        departure: {
          iataCode: segment.departure?.iataCode,
          at: segment.departure?.at,
          terminal: segment.departure?.terminal,
        },
        arrival: {
          iataCode: segment.arrival?.iataCode,
          at: segment.arrival?.at,
          terminal: segment.arrival?.terminal,
        },
      }))

      return {
        duration: itinerary.duration,
        segments,
      }
    })

    return {
      id: offer.id,
      type: 'flight-offer',
      source: 'amadeus',
      oneWay: itineraries.length === 1,
      lastTicketingDate: offer.lastTicketingDate,
      numberOfBookableSeats: offer.numberOfBookableSeats,
      price: {
        total: toNumber(offer.price?.total),
        base: toNumber(offer.price?.base),
        currency: offer.price?.currency || 'EUR',
      },
      itineraries,
      validatingCarrierCodes: offer.validatingCarrierCodes,
    }
  })

  return {
    flights,
    dictionaries,
    total: flights.length,
    source: 'api'
  }
}
