import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'

/**
 * Mehmonxonani bron qilish (Confirm Booking)
 * Doc: docs/bookingapi-openapi.json -> BookingRequest
 */
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    console.log('[Booking API] Incoming request:', JSON.stringify(body, null, 2))

    // Validatsiya
    if (!body.holder || !body.rooms) {
      throw createError({
        statusCode: 400,
        message: 'Invalid request: holder and rooms are required',
      })
    }

    // OpenAPI specifikatsiyasiga muvofiq payloadni tozalaymiz
    const sanitizedPayload = {
      holder: {
        name: String(body.holder.name).trim(),
        surname: String(body.holder.surname).trim()
      },
      rooms: body.rooms.map((room: any) => ({
        rateKey: room.rateKey,
        paxes: (room.paxes || []).map((pax: any) => ({
          roomId: Number(pax.roomId || 1),
          type: pax.type || 'AD',
          name: String(pax.name).trim(),
          surname: String(pax.surname).trim(),
          age: pax.age ? Number(pax.age) : undefined
        }))
      })),
      clientReference: body.clientReference || `TRIP-${Date.now()}`,
      remark: body.remark || '',
      tolerance: body.tolerance ? Number(body.tolerance) : undefined
    }

    console.log('[Booking API] Upstream payload:', JSON.stringify(sanitizedPayload, null, 2))

    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/booking/`

    const response: any = await $fetch(upstreamUrl, {
      method: 'POST',
      headers: buildUpstreamHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: sanitizedPayload,
      timeout: 30000,
    })

    console.log('[Booking API] Booking successful:', response?.reference || response?.booking?.reference)
    return response

  } catch (error: any) {
    console.error('[Booking API] Error:', error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      message: `Booking error: ${error.message}`,
      data: error.data,
    })
  }
})
