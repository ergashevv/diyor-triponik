// Hotel API utilities (Next.js _utils.ts kabi)

export function getHotelApiBaseUrl() {
  const config = useRuntimeConfig()
  return config.hotelApiBaseUrl || 'https://api.triponik.uz'
}

export function getHotelApiCredentials() {
  const config = useRuntimeConfig()
  const username = config.hotelApiUsername || 'diyorbek'
  const password = config.hotelApiPassword || 'Mulan2025...'
  return { username, password }
}

export function buildUpstreamHeaders(base: Record<string, string> = {}) {
  const { username, password } = getHotelApiCredentials()

  if (username && password) {
    const credentials = Buffer.from(`${username}:${password}`).toString('base64')
    return {
      ...base,
      'Authorization': `Basic ${credentials}`,
    }
  }

  return base
}

export function ensureHotelApiCredentials() {
  const { username, password } = getHotelApiCredentials()
  return !!(username && password)
}
