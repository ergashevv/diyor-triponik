export const useTourAPI = () => {
  const searchTours = async (tag: string = 'all', country?: string, q?: string) => {
    return await $fetch('/api/tours/search', {
      params: { tag, country, q }
    })
  }

  const getTourDetail = async (id: string) => {
    return await $fetch('/api/tours/detail', {
      params: { id }
    })
  }

  const getPopularDestinations = async () => {
    return await $fetch('/api/common/destinations')
  }

  return {
    searchTours,
    getTourDetail,
    getPopularDestinations
  }
}
