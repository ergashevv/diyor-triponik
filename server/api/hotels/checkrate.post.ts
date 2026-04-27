import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    console.log('[Check Rate API] Incoming request:', JSON.stringify(body, null, 2))

    // Validate request
    if (!body.rateKey && !body.rooms) {
      throw createError({
        statusCode: 400,
        message: 'Invalid request: rateKey or rooms are required',
      })
    }

    // Build request payload
    const payload = body.rateKey
      ? { rooms: [{ rateKey: body.rateKey }] }
      : body

    console.log('[Check Rate API] Request payload:', JSON.stringify(payload, null, 2))

    // Upstream API call
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

    console.log('[Check Rate API] Response received')
    console.log('[Check Rate API] Rate key valid:', !!response?.hotel?.rooms?.[0]?.rates?.[0]?.rateKey)

    return response
  } catch (error: any) {
    console.error('[Check Rate API] Error:', error)
    console.error('[Check Rate API] Error message:', error.message)

    if (error.data) {
      console.error('[Check Rate API] Error data:', JSON.stringify(error.data, null, 2))
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: `Check Rate error: ${error.message}`,
      data: error.data,
    })
  }
})
