import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptHotelDetails } from '../../utils/adapters'

function normaliseOccupancy(occupancy: any) {
  const result: any = {
    rooms: occupancy.rooms,
    adults: occupancy.adults,
    children: occupancy.children,
  }

  // Generate paxes array
  const paxes: Array<{ type: 'AD' | 'CH'; age: number }> = []

  // Add adults
  for (let i = 0; i < occupancy.adults; i++) {
    paxes.push({ type: 'AD', age: 30 })
  }

  // Add children
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

    console.log('[Detail API] Incoming request:', JSON.stringify(body, null, 2))

    // Support both formats:
    // 1. { rooms: [{ rateKey }] } - from frontend
    // 2. { stay, occupancies, hotels } - full format

    let payload: any

    // If rateKey format
    if (body.rooms && Array.isArray(body.rooms) && body.rooms[0]?.rateKey) {
      const rateKey = body.rooms[0].rateKey
      console.log('[Detail API] Request for rateKey:', rateKey)

      payload = {
        rooms: body.rooms.map((room: any) => ({
          rateKey: room.rateKey.trim(),
        })),
      }
    }
    // If full format
    else if (body.stay && body.occupancies && body.hotels) {
      payload = {
        stay: body.stay,
        occupancies: body.occupancies.map(normaliseOccupancy),
        hotels: body.hotels,
      }
    }
    // Invalid format
    else {
      console.error('[Detail API] Validation failed:', {
        hasRooms: !!body.rooms,
        hasRateKey: !!body.rooms?.[0]?.rateKey,
        hasStay: !!body.stay,
        hasOccupancies: !!body.occupancies,
        hasHotels: !!body.hotels,
      })
      throw createError({
        statusCode: 400,
        message: 'Invalid request: either rooms with rateKey OR stay+occupancies+hotels required',
      })
    }

    console.log('[Detail API] Upstream payload:', JSON.stringify(payload, null, 2))

    // Upstream API call - use CHECKRATE endpoint (detail endpoint doesn't exist)
    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/checkrate/`

    const response: any = await $fetch(upstreamUrl, {
      method: 'POST',
      headers: buildUpstreamHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: payload,
      timeout: 30000,
    })

    console.log('[Detail API] Response received')

    // Adapt response
    const adaptedResponse = adaptHotelDetails(response)

    console.log('[Detail API] Hotel adapted:', adaptedResponse.hotel?.name)

    return adaptedResponse
  } catch (error: any) {
    console.error('[Detail API] Error:', error)
    console.error('[Detail API] Error message:', error.message)

    if (error.data) {
      console.error('[Detail API] Error data:', JSON.stringify(error.data, null, 2))
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: `Detail API error: ${error.message}`,
      data: error.data,
    })
  }
})
