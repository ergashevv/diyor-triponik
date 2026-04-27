export const useTrainAPI = () => {
  const searchTrains = async (params: { from: string, to: string, date?: string }) => {
    return await $fetch('/api/trains/search', {
      params
    })
  }

  return {
    searchTrains
  }
}
