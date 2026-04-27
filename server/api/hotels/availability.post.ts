import { hotels } from '../../utils/mockData'
import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptAvailabilityResponse } from '../../utils/adapters'

function normaliseOccupancy(occupancy: any) {
  const result: any = {
    rooms: Number(occupancy.rooms || 1),
    adults: Number(occupancy.adults || 1),
    children: Number(occupancy.children || 0),
  }

  // Generate paxes array
  const paxes: Array<{ type: 'AD' | 'CH'; age: number }> = []

  // Add adults
  for (let i = 0; i < result.adults; i++) {
    paxes.push({ type: 'AD', age: 30 })
  }

  // Add children
  for (let i = 0; i < result.children; i++) {
    paxes.push({ type: 'CH', age: 8 })
  }

  if (paxes.length > 0) {
    result.paxes = paxes
  }

  return result
}

function buildAvailabilityRequest(request: any) {
  const payload: any = {
    stay: {
      checkIn: request.stay?.checkIn || '2024-12-01',
      checkOut: request.stay?.checkOut || '2024-12-08',
    },
    occupancies: (request.occupancies || [{ rooms: 1, adults: 1, children: 0 }]).map(normaliseOccupancy),
  }

  // Add destination to ROOT level
  const destination = request.filter?.destination || request.destination
  if (destination && destination.code) {
    const code = String(destination.code).trim().toUpperCase()
    payload.destination = {
      code,
      type: destination.type || 'SIMPLE',
    }
  }

  // Optional filter
  const filter: any = {}
  if (request.filter?.minRate !== undefined) filter.minRate = request.filter.minRate
  if (request.filter?.maxRate !== undefined) filter.maxRate = request.filter.maxRate
  if (request.filter?.hotelName) filter.hotelName = request.filter.hotelName

  // Pagination / Max Hotels
  filter.maxHotels = request.pagination?.size || 100

  if (Object.keys(filter).length > 0) {
    payload.filter = filter
  }

  return payload
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const payload = buildAvailabilityRequest(body)
  
  const cityName = body.filter?.destination?.name || body.destination?.name || ''
  
  console.log('[Availability API] Search:', { cityName, destinationCode: payload.destination?.code })

  try {
    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/availability/`
    const headers = buildUpstreamHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })

    console.log('[Availability API] Calling Real API...')
    const response: any = await $fetch(upstreamUrl, {
      method: 'POST',
      headers,
      body: payload,
      timeout: 30000
    })
    
    console.log('[Availability API] Real API success.')
    const adapted = adaptAvailabilityResponse(response, body)

    return {
      hotels: adapted.hotels,
      total: adapted.total,
      currency: adapted.currency,
      source: 'api',
      meta: adapted.meta
    }

  } catch (error: any) {
    const statusCode = error.response?.status || 500
    console.error(`[Availability API] Real API failure (${statusCode}):`, error.message)
    
    // Fallback to mock data
    let mockHotels = []
    if (cityName) {
      const normalizedCity = cityName.toLowerCase()
      mockHotels = hotels.filter(h => (h.city || '').toLowerCase().includes(normalizedCity))
    }

    if (mockHotels.length === 0) {
       mockHotels = hotels.filter(h => h.city === 'Dubai' || h.city === 'Toshkent').slice(0, 8)
    }

    const mockResults = mockHotels.map(h => ({
      ...h,
      id: h.code,
      image: h.images?.[0]?.path || h.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      rooms: [
        {
          code: 'DBL',
          name: 'Standart xona',
          rates: [
            {
              rateKey: `mock_key_${h.code}`,
              net: h.minRate,
              boardName: 'Breakfast included',
              price: { net: h.minRate, currency: 'USD' }
            }
          ]
        }
      ]
    }))

    return {
      hotels: mockResults,
      total: mockResults.length,
      currency: 'USD',
      source: 'mock'
    }
  }
})
