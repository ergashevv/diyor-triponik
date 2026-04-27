import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'

/**
 * Bronni bekor qilish
 * Doc: docs/bookingapi-openapi.json -> cancelBooking
 */
export default defineEventHandler(async (event) => {
  try {
    const bookingReference = event.context.params?.booking_reference
    
    if (!bookingReference) {
      throw createError({
        statusCode: 400,
        message: 'Booking reference is required',
      })
    }

    console.log('[Cancel API] Cancelling booking:', bookingReference)

    const baseUrl = getHotelApiBaseUrl()
    const upstreamUrl = `${baseUrl}/hotel/hotel/cancel/${bookingReference}/`

    const response = await $fetch(upstreamUrl, {
      method: 'DELETE',
      headers: buildUpstreamHeaders({
        'Accept': 'application/json',
      }),
      timeout: 20000,
    })

    console.log('[Cancel API] Cancellation success for:', bookingReference)
    return response

  } catch (error: any) {
    console.error('[Cancel API] Error:', error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      message: `Cancel error: ${error.message}`,
      data: error.data,
    })
  }
})
