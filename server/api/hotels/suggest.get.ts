import { getHotelApiBaseUrl, buildUpstreamHeaders } from '../../utils/hotelApi'
import { adaptSuggestions } from '../../utils/adapters'

// Mock destinations (Next.js'dagi kabi)
const MOCK_DESTINATIONS = [
  { code: 'TAS', name: 'Toshkent', countryCode: 'UZ', type: 'CITY' },
  { code: 'SAM', name: 'Samarqand', countryCode: 'UZ', type: 'CITY' },
  { code: 'BUX', name: 'Buxoro', countryCode: 'UZ', type: 'CITY' },
  { code: 'XIV', name: 'Xiva', countryCode: 'UZ', type: 'CITY' },
  { code: 'NAM', name: 'Namangan', countryCode: 'UZ', type: 'CITY' },
  { code: "FAR", name: "Farg'ona", countryCode: 'UZ', type: 'CITY' },
  { code: 'AND', name: 'Andijon', countryCode: 'UZ', type: 'CITY' },

  // Middle East
  { code: 'DXB', name: 'Dubai', countryCode: 'AE', type: 'CITY' },
  { code: 'AUH', name: 'Abu Dhabi', countryCode: 'AE', type: 'CITY' },
  { code: 'DOH', name: 'Doha', countryCode: 'QA', type: 'CITY' },
  { code: 'KWI', name: 'Kuwait City', countryCode: 'KW', type: 'CITY' },
  { code: 'BAH', name: 'Manama', countryCode: 'BH', type: 'CITY' },
  { code: 'JED', name: 'Jeddah', countryCode: 'SA', type: 'CITY' },
  { code: 'RUH', name: 'Riyadh', countryCode: 'SA', type: 'CITY' },
  { code: 'MCT', name: 'Muscat', countryCode: 'OM', type: 'CITY' },

  // Turkey
  { code: 'IST', name: 'Istanbul', countryCode: 'TR', type: 'CITY' },
  { code: 'ANK', name: 'Ankara', countryCode: 'TR', type: 'CITY' },
  { code: 'AYT', name: 'Antalya', countryCode: 'TR', type: 'CITY' },
  { code: 'IZM', name: 'Izmir', countryCode: 'TR', type: 'CITY' },

  // Europe
  { code: 'PAR', name: 'Paris', countryCode: 'FR', type: 'CITY' },
  { code: 'LON', name: 'London', countryCode: 'GB', type: 'CITY' },
  { code: 'ROM', name: 'Rome', countryCode: 'IT', type: 'CITY' },
  { code: 'MAD', name: 'Madrid', countryCode: 'ES', type: 'CITY' },
  { code: 'BCN', name: 'Barcelona', countryCode: 'ES', type: 'CITY' },
  { code: 'AMS', name: 'Amsterdam', countryCode: 'NL', type: 'CITY' },
  { code: 'BER', name: 'Berlin', countryCode: 'DE', type: 'CITY' },
  { code: 'MUN', name: 'Munich', countryCode: 'DE', type: 'CITY' },
  { code: 'VIE', name: 'Vienna', countryCode: 'AT', type: 'CITY' },
  { code: 'PRG', name: 'Prague', countryCode: 'CZ', type: 'CITY' },
  { code: 'ATH', name: 'Athens', countryCode: 'GR', type: 'CITY' },
  { code: 'LIS', name: 'Lisbon', countryCode: 'PT', type: 'CITY' },
  { code: 'STO', name: 'Stockholm', countryCode: 'SE', type: 'CITY' },
  { code: 'OSL', name: 'Oslo', countryCode: 'NO', type: 'CITY' },
  { code: 'CPH', name: 'Copenhagen', countryCode: 'DK', type: 'CITY' },
  { code: 'HEL', name: 'Helsinki', countryCode: 'FI', type: 'CITY' },
  { code: 'DUB', name: 'Dublin', countryCode: 'IE', type: 'CITY' },
  { code: 'EDI', name: 'Edinburgh', countryCode: 'GB', type: 'CITY' },
  { code: 'MIL', name: 'Milan', countryCode: 'IT', type: 'CITY' },
  { code: 'VEN', name: 'Venice', countryCode: 'IT', type: 'CITY' },
  { code: 'FLR', name: 'Florence', countryCode: 'IT', type: 'CITY' },
  { code: 'BRU', name: 'Brussels', countryCode: 'BE', type: 'CITY' },
  { code: 'WAR', name: 'Warsaw', countryCode: 'PL', type: 'CITY' },
  { code: 'BUD', name: 'Budapest', countryCode: 'HU', type: 'CITY' },


  // Asia
  { code: 'BKK', name: 'Bangkok', countryCode: 'TH', type: 'CITY' },
  { code: 'SIN', name: 'Singapore', countryCode: 'SG', type: 'CITY' },
  { code: 'KUL', name: 'Kuala Lumpur', countryCode: 'MY', type: 'CITY' },
  { code: 'JKT', name: 'Jakarta', countryCode: 'ID', type: 'CITY' },
  { code: 'BAL', name: 'Bali', countryCode: 'ID', type: 'REGION' },
  { code: 'HKG', name: 'Hong Kong', countryCode: 'HK', type: 'CITY' },
  { code: 'TPE', name: 'Taipei', countryCode: 'TW', type: 'CITY' },
  { code: 'SEO', name: 'Seoul', countryCode: 'KR', type: 'CITY' },
  { code: 'TYO', name: 'Tokyo', countryCode: 'JP', type: 'CITY' },
  { code: 'OSA', name: 'Osaka', countryCode: 'JP', type: 'CITY' },
  { code: 'DEL', name: 'Delhi', countryCode: 'IN', type: 'CITY' },
  { code: 'BOM', name: 'Mumbai', countryCode: 'IN', type: 'CITY' },
  { code: 'BLR', name: 'Bangalore', countryCode: 'IN', type: 'CITY' },
  { code: 'CCU', name: 'Kolkata', countryCode: 'IN', type: 'CITY' },
  { code: 'MAA', name: 'Chennai', countryCode: 'IN', type: 'CITY' },
  { code: 'PEK', name: 'Beijing', countryCode: 'CN', type: 'CITY' },
  { code: 'SHA', name: 'Shanghai', countryCode: 'CN', type: 'CITY' },
  { code: 'CAN', name: 'Guangzhou', countryCode: 'CN', type: 'CITY' },
  { code: 'SZX', name: 'Shenzhen', countryCode: 'CN', type: 'CITY' },
  { code: 'CTU', name: 'Chengdu', countryCode: 'CN', type: 'CITY' },

  // Americas
  { code: 'NYC', name: 'New York', countryCode: 'US', type: 'CITY' },
  { code: 'LAX', name: 'Los Angeles', countryCode: 'US', type: 'CITY' },
  { code: 'CHI', name: 'Chicago', countryCode: 'US', type: 'CITY' },
  { code: 'MIA', name: 'Miami', countryCode: 'US', type: 'CITY' },
  { code: 'LAS', name: 'Las Vegas', countryCode: 'US', type: 'CITY' },
  { code: 'SFO', name: 'San Francisco', countryCode: 'US', type: 'CITY' },
  { code: 'BOS', name: 'Boston', countryCode: 'US', type: 'CITY' },
  { code: 'WAS', name: 'Washington', countryCode: 'US', type: 'CITY' },
  { code: 'MEX', name: 'Mexico City', countryCode: 'MX', type: 'CITY' },
  { code: 'CUN', name: 'Cancun', countryCode: 'MX', type: 'CITY' },
  { code: 'RIO', name: 'Rio de Janeiro', countryCode: 'BR', type: 'CITY' },
  { code: 'SAO', name: 'São Paulo', countryCode: 'BR', type: 'CITY' },
  { code: 'BUE', name: 'Buenos Aires', countryCode: 'AR', type: 'CITY' },
  { code: 'LIM', name: 'Lima', countryCode: 'PE', type: 'CITY' },
  { code: 'BOG', name: 'Bogotá', countryCode: 'CO', type: 'CITY' },
  { code: 'SCL', name: 'Santiago', countryCode: 'CL', type: 'CITY' },

  // Africa
  { code: 'CAI', name: 'Cairo', countryCode: 'EG', type: 'CITY' },
  { code: 'JNB', name: 'Johannesburg', countryCode: 'ZA', type: 'CITY' },
  { code: 'CPT', name: 'Cape Town', countryCode: 'ZA', type: 'CITY' },
  { code: 'NBO', name: 'Nairobi', countryCode: 'KE', type: 'CITY' },
  { code: 'CMN', name: 'Casablanca', countryCode: 'MA', type: 'CITY' },
  { code: 'TUN', name: 'Tunis', countryCode: 'TN', type: 'CITY' },
  // Oceania
  { code: 'SYD', name: 'Sydney', countryCode: 'AU', type: 'CITY' },
  { code: 'MEL', name: 'Melbourne', countryCode: 'AU', type: 'CITY' },
  { code: 'BNE', name: 'Brisbane', countryCode: 'AU', type: 'CITY' },
  { code: 'PER', name: 'Perth', countryCode: 'AU', type: 'CITY' },
  { code: 'AKL', name: 'Auckland', countryCode: 'NZ', type: 'CITY' },
  { code: 'WLG', name: 'Wellington', countryCode: 'NZ', type: 'CITY' },

  // Russia & CIS
  { code: 'MOW', name: 'Moscow', countryCode: 'RU', type: 'CITY' },
  { code: 'LED', name: 'Saint Petersburg', countryCode: 'RU', type: 'CITY' },
  { code: 'ALA', name: 'Almaty', countryCode: 'KZ', type: 'CITY' },
  { code: 'TBS', name: 'Tbilisi', countryCode: 'GE', type: 'CITY' },
  { code: 'EVN', name: 'Yerevan', countryCode: 'AM', type: 'CITY' },
  { code: 'BAK', name: 'Baku', countryCode: 'AZ', type: 'CITY' },

  // Airports
  { code: 'DXB', name: 'Dubai Airport', countryCode: 'AE', type: 'AIRPORT' },
  { code: 'TAS', name: 'Tashkent Airport', countryCode: 'UZ', type: 'AIRPORT' },
  { code: 'IST', name: 'Istanbul Airport', countryCode: 'TR', type: 'AIRPORT' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', countryCode: 'FR', type: 'AIRPORT' },
  { code: 'LHR', name: 'Heathrow Airport', countryCode: 'GB', type: 'AIRPORT' },
  { code: 'JFK', name: 'JFK Airport', countryCode: 'US', type: 'AIRPORT' },
];

function filterMockDestinations(query: string) {
  if (!query) return MOCK_DESTINATIONS.slice(0, 12)

  const lowerQuery = query.toLowerCase()
  return MOCK_DESTINATIONS.filter(dest =>
    dest.name.toLowerCase().includes(lowerQuery) ||
    dest.code.toLowerCase().includes(lowerQuery)
  ).slice(0, 20)
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchQuery = (query.query as string) || ''

  console.log('[Suggest API] Qabul qilindi:', searchQuery)

  if (searchQuery.trim().length < 1) {
    console.log('[Suggest API] Bo\'sh query, mock data qaytarilmoqda')
    return filterMockDestinations('')
  }

  try {
    const baseUrl = getHotelApiBaseUrl()
    console.log('[Suggest API] Backend URL:', `${baseUrl}/hotel/suggest/`)

    const response = await $fetch(`${baseUrl}/hotel/suggest/`, {
      method: 'GET',
      params: { query: searchQuery.trim() },
      headers: buildUpstreamHeaders({
        'Accept': 'application/json',
      }),
      timeout: 10000,
    })

    console.log('[Suggest API] Backend javob:', response)

    const suggestions = adaptSuggestions(response)
    console.log('[Suggest API] Adapt qilingan:', suggestions)

    // Agar backend bo'sh qaytarsa, mock data
    if (suggestions.length > 0) {
      console.log('[Suggest API] Backend ma\'lumot qaytardi:', suggestions.length, 'ta')
      return suggestions
    }

    console.log('[Suggest API] Backend bo\'sh, mock data qaytarilmoqda')
    return filterMockDestinations(searchQuery)
  } catch (error: any) {
    console.error('[Suggest API] Xatolik:', error)
    // Fallback: mock data qaytarish
    return filterMockDestinations(searchQuery)
  }
})
