export const useCarAPI = () => {
  const searchCars = async (params: { location: string, to: string, pickupDate?: string, returnDate?: string }) => {
    return await $fetch('/api/cars/search', {
      params
    })
  }

  return {
    searchCars
  }
}
