export const useHotelAPI = () => {
  // Suggest API - shaharlar ro'yxatini olish
  const searchDestinations = async (query: string) => {
    try {
      const response = await $fetch('/api/hotels/suggest', {
        method: 'GET',
        params: { query }
      })
      return response
    } catch (error) {
      console.error('[useHotelAPI] Suggest error:', error)
      throw error
    }
  }

  // Availability API - mehmonxonalar qidirish
  const searchHotels = async (params: {
    stay: {
      checkIn: string
      checkOut: string
    }
    occupancies: Array<{
      rooms: number
      adults: number
      children: number
    }>
    filter?: {
      destination?: {
        code: string
      }
      minRate?: number
      maxRate?: number
      hotelName?: string
    }
  }) => {
    try {
      const response = await $fetch('/api/hotels/availability', {
        method: 'POST',
        body: params
      })
      return response
    } catch (error) {
      console.error('[useHotelAPI] Availability error:', error)
      throw error
    }
  }

  // Hotel Details API - bitta hotel ma'lumotlari
  // Supports two formats:
  // 1. rooms array with rateKey: [{ rateKey: "..." }]
  // 2. full format: { stay, occupancies, hotels }
  const getHotelDetails = async (params: Array<{ rateKey: string }> | {
    stay: {
      checkIn: string
      checkOut: string
    }
    occupancies: Array<{
      rooms: number
      adults: number
      children: number
    }>
    hotels: {
      hotel: Array<{
        code: string
      }>
    }
  }) => {
    try {
      console.log('[useHotelAPI] getHotelDetails params:', params)

      // If array format (rateKey), convert to { rooms } format
      const body = Array.isArray(params)
        ? { rooms: params }
        : params

      console.log('[useHotelAPI] getHotelDetails body:', JSON.stringify(body, null, 2))

      const response = await $fetch('/api/hotels/detail', {
        method: 'POST',
        body
      })
      return response
    } catch (error) {
      console.error('[useHotelAPI] Detail error:', error)
      throw error
    }
  }

  // Check Rate API - narxni tekshirish
  const checkRate = async (rateKey: string) => {
    try {
      const response = await $fetch('/api/hotels/checkrate', {
        method: 'POST',
        body: { rateKey }
      })
      return response
    } catch (error) {
      console.error('[useHotelAPI] Checkrate error:', error)
      throw error
    }
  }

  // Booking API - bron qilish
  const createBooking = async (params: {
    holder: {
      name: string
      surname: string
      email: string
      phone: string
    }
    rooms: Array<{
      rateKey: string
      paxes: Array<{
        type: 'AD' | 'CH'
        name: string
        surname: string
        age?: number
      }>
    }>
    clientReference?: string
    remark?: string
  }) => {
    try {
      const response = await $fetch('/api/hotels/booking', {
        method: 'POST',
        body: params
      })
      return response
    } catch (error) {
      console.error('[useHotelAPI] Booking error:', error)
      throw error
    }
  }

  return {
    searchDestinations,
    searchHotels,
    getHotelDetails,
    checkRate,
    createBooking
  }
}
