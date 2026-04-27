import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptHotelDetails } from '../../utils/adapters'
import { hotels } from '../../utils/mockData'

function normaliseOccupancy(occupancy: any) {
  const result: any = {
    rooms: occupancy.rooms,
    adults: occupancy.adults,
    children: occupancy.children,
  }

  const paxes: Array<{ type: 'AD' | 'CH'; age: number }> = []

  for (let i = 0; i < occupancy.adults; i++) {
    paxes.push({ type: 'AD', age: 30 })
  }

  for (let i = 0; i < occupancy.children; i++) {
    paxes.push({ type: 'CH', age: 8 })
  }

  if (paxes.length > 0) {
    result.paxes = paxes
  }

  return result
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    let payload: any

    // Support both formats
    if (body.rooms && Array.isArray(body.rooms) && body.rooms[0]?.rateKey) {
      payload = {
        rooms: body.rooms.map((room: any) => ({
          rateKey: room.rateKey.trim(),
        })),
      }
    } else if (body.stay && body.occupancies && body.hotels) {
      payload = {
        stay: body.stay,
        occupancies: body.occupancies.map(normaliseOccupancy),
        hotels: body.hotels,
      }
    } else {
      throw createError({
        statusCode: 400,
        message: 'Invalid request: either rooms with rateKey OR stay+occupancies+hotels required',
      })
    }

    const firstRateKey = body.rooms?.[0]?.rateKey || ''
    
    // Check if it's a mock key
    if (firstRateKey.startsWith('mock_key_')) {
      const hotelCode = firstRateKey.split('_')[2]
      const h = hotels.find(item => item.code === hotelCode) || hotels[0]
      
      console.log('[Detail API] Returning mock data for:', hotelCode)
      
      return {
        hotel: {
          code: h.code,
          name: h.name,
          categoryCode: h.categoryName,
          categoryName: h.categoryName,
          latitude: '41.2995',
          longitude: '69.2401',
          destinationName: h.city,
          currency: h.currency || 'USD',
          minRate: h.minRate,
          images: h.images,
          rooms: [
            {
              code: 'DBL',
              name: 'Standart xona',
              roomFacilities: [
                { description: 'Wi-Fi' },
                { description: 'Konditsioner' },
                { description: 'Televizor' }
              ],
              rates: [
                {
                  rateKey: firstRateKey,
                  boardName: 'Breakfast included',
                  paymentType: 'AT_WEB',
                  price: {
                    net: h.minRate,
                    currency: h.currency || 'USD',
                    taxesIncluded: true
                  },
                  cancellationPolicies: [
                    { from: new Date().toISOString() }
                  ]
                }
              ]
            }
          ]
        }
      }
    }

    // Try real API
    try {
      const baseUrl = getHotelApiBaseUrl()
      const upstreamUrl = `${baseUrl}/hotel/hotel/checkrate/`
      const response: any = await $fetch(upstreamUrl, {
        method: 'POST',
        headers: buildUpstreamHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: payload,
        timeout: 5000,
      })
      return adaptHotelDetails(response)
    } catch (e) {
      // Fallback
      const h = hotels[0]
      return {
        hotel: {
          code: h.code,
          name: h.name,
          categoryName: h.categoryName,
          city: h.city,
          destinationName: h.city,
          currency: h.currency || 'USD',
          totalNet: h.minRate,
          images: h.images,
          rooms: [
            {
              code: 'DBL',
              name: 'Standard Room (Fallback)',
              rates: [
                {
                  rateKey: firstRateKey || 'fallback_key',
                  boardName: 'Breakfast included',
                  paymentType: 'AT_WEB',
                  price: {
                    net: h.minRate,
                    currency: h.currency || 'USD'
                  }
                }
              ]
            }
          ]
        }
      }
    }
  } catch (error: any) {
    console.error('[Detail API] Fatal Error:', error)
    return { error: error.message }
  }
})
