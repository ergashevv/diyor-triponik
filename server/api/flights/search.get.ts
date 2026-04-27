import { flights as mockFlights } from '../../utils/mockData'

/**
 * Bu endpoint hozirda faqat Mock ma'lumotlar bilan ishlaydi.
 * Kelajakda Amadeus integratsiyasi yoqilishi rejalashtirilgan.
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  const origin = (query.origin as string) || 'TAS'
  const destination = (query.destination as string) || 'DXB'
  const departureDate = (query.departureDate as string) || '2026-06-01'
  const adults = (query.adults as string) || '1'

  console.log('[Flight Search API] Mock Mode:', { origin, destination, departureDate, adults })

  // Mock datadan qidirish
  const filteredMock = mockFlights.filter(f => 
    f.itineraries[0].segments[0].departure.iataCode === origin &&
    f.itineraries[0].segments[0].arrival.iataCode === destination
  )

  const finalMock = filteredMock.length > 0 ? filteredMock : mockFlights

  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 800))

  return {
    flights: finalMock,
    total: finalMock.length,
    source: 'mock'
  }
})
