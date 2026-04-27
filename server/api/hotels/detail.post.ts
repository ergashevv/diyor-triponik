import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptHotelDetails } from '../../utils/adapters'
import { hotels } from '../../utils/mockData'

function normaliseOccupancy(occupancy: any) {
  const result: any = {
    rooms: Number(occupancy.rooms || 1),
    adults: Number(occupancy.adults || 1),
    children: Number(occupancy.children || 0),
  }

  const paxes = []
  for (let i = 0; i < result.adults; i++) paxes.push({ type: 'AD', age: 30 })
  for (let i = 0; i < result.children; i++) paxes.push({ type: 'CH', age: 8 })
  
  if (paxes.length > 0) result.paxes = paxes
  return result
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    let payload: any

    // 1. { rooms: [{ rateKey }] } - Standard CheckRate format
    if (body.rooms && Array.isArray(body.rooms) && body.rooms[0]?.rateKey) {
      payload = {
        rooms: body.rooms.map((room: any) => ({
          rateKey: room.rateKey.trim(),
        })),
      }
    } 
    // 2. { stay, occupancies, hotels } - Alternate format supported by previous dev
    else if (body.stay && body.occupancies && body.hotels) {
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
    
    // Mock Data Fallback for mock keys
    if (firstRateKey.startsWith('mock_key_')) {
      const hotelCode = firstRateKey.split('_')[2]
      const h = hotels.find(item => item.code === hotelCode) || hotels[0]
      console.log('[Detail API] Returning mock data for:', hotelCode)
      return {
        hotel: {
          code: h.code,
          name: h.name,
          categoryName: h.categoryName,
          stars: 4,
          images: h.images,
          rooms: [{
            code: 'DBL',
            name: 'Standart xona',
            rates: [{
              rateKey: firstRateKey,
              boardName: 'Breakfast included',
              price: { net: h.minRate, currency: 'USD' }
            }]
          }]
        }
      }
    }

    // Try Real API
    try {
      const baseUrl = getHotelApiBaseUrl()
      const upstreamUrl = `${baseUrl}/hotel/hotel/checkrate/`
      
      console.log('[Detail API] Calling upstream:', upstreamUrl)
      
      const response: any = await $fetch(upstreamUrl, {
        method: 'POST',
        headers: buildUpstreamHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: payload,
        timeout: 10000,
      })
      
      return adaptHotelDetails(response)
    } catch (e: any) {
      console.error('[Detail API] Upstream error, falling back to mock:', e.message)
      const h = hotels[0]
      return {
        hotel: {
          code: h.code,
          name: h.name,
          categoryName: h.categoryName,
          images: h.images,
          rooms: [{
            name: 'Standard Room',
            rates: [{ price: { net: h.minRate, currency: 'USD' } }]
          }]
        }
      }
    }
  } catch (error: any) {
    console.error('[Detail API] Fatal Error:', error)
    return { error: error.message }
  }
})
