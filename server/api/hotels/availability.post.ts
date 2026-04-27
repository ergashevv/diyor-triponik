import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptAvailabilityResponse } from '../../utils/adapters'

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

function buildAvailabilityRequest(request: any) {
  const payload: any = {
    stay: request.stay,
    occupancies: request.occupancies.map(normaliseOccupancy),
  }

  // Add destination to ROOT level (not in filter!)
  const destination = request.filter?.destination || request.destination
  if (destination && destination.code) {
    const code = String(destination.code).trim().toUpperCase()
    if (code.length >= 2 && code.length <= 10) {
      payload.destination = {
        code,
        type: destination.type || 'SIMPLE',
      }
    }
  }

  // Build filter for other fields
  const filter: any = {}

  if (request.filter?.minRate !== undefined) {
    filter.minRate = request.filter.minRate
  }
  if (request.filter?.maxRate !== undefined) {
    filter.maxRate = request.filter.maxRate
  }
  if (request.filter?.hotelName) {
    filter.hotelName = request.filter.hotelName
  }

  // Add maxHotels to filter
  filter.maxHotels = request.pagination?.size || 25

  if (Object.keys(filter).length > 0) {
    payload.filter = filter
  }

  return payload
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate request
    if (!body.stay || !body.occupancies) {
      throw createError({
        statusCode: 400,
        message: 'Invalid request: stay and occupancies are required',
      })
    }

    // Build payload
    const payload = buildAvailabilityRequest(body)

    console.log('[Availability API] Request payload:', JSON.stringify(payload, null, 2))

    // Upstream API call
    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/availability/`

    const response = await $fetch(upstreamUrl, {
      method: 'POST',
      headers: buildUpstreamHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: payload,
      timeout: 30000,
    })

    console.log('[Availability API] Response received')
    console.log('[Availability API] Hotels count:', extractHotelsCount(response))

    // Adapt response
    const adaptedResponse = adaptAvailabilityResponse(response, body)

    console.log('[Availability API] Adapted hotels count:', adaptedResponse.hotels.length)

    return adaptedResponse
  } catch (error: any) {
    console.error('[Availability API] Error:', error)
    console.error('[Availability API] Error message:', error.message)
    console.error('[Availability API] Error statusCode:', error.statusCode)

    if (error.data) {
      console.error('[Availability API] Error data:', JSON.stringify(error.data, null, 2))
    }

    if (error.response) {
      console.error('[Availability API] Error response:', error.response)
    }

    // Return detailed error to help debug
    throw createError({
      statusCode: error.statusCode || 500,
      message: `Availability API error: ${error.message}`,
      data: error.data,
    })
  }
})

function extractHotelsCount(payload: any): number {
  if (Array.isArray(payload?.hotels)) return payload.hotels.length
  if (Array.isArray(payload?.data?.hotels)) return payload.data.hotels.length
  if (Array.isArray(payload?.hotels?.hotels)) return payload.hotels.hotels.length
  if (Array.isArray(payload?.hotels?.hotel)) return payload.hotels.hotel.length
  return 0
}
