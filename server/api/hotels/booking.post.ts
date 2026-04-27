import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    console.log('[Booking API] Incoming request:', JSON.stringify(body, null, 2))

    // Validate request
    if (!body.holder || !body.rooms) {
      console.error('[Booking API] Validation failed:', {
        hasHolder: !!body.holder,
        hasRooms: !!body.rooms,
      })
      throw createError({
        statusCode: 400,
        message: 'Invalid request: holder and rooms are required',
      })
    }

    console.log('[Booking API] Request payload:', JSON.stringify(body, null, 2))

    // Upstream API call
    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/booking/`

    const response: any = await $fetch(upstreamUrl, {
      method: 'POST',
      headers: buildUpstreamHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body,
      timeout: 30000,
    })

    console.log('[Booking API] Response received')
    console.log('[Booking API] Booking reference:', response?.reference || response?.booking?.reference)

    return response
  } catch (error: any) {
    console.error('[Booking API] Error:', error)
    console.error('[Booking API] Error message:', error.message)

    if (error.data) {
      console.error('[Booking API] Error data:', JSON.stringify(error.data, null, 2))
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: `Booking error: ${error.message}`,
      data: error.data,
    })
  }
})
