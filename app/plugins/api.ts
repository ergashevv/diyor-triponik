import createClient from 'openapi-fetch'
import type { paths } from '../../types/api-schema'
import { useAuthStore } from '~/stores/auth'

interface ErrorResponse {
  success: false
  key: string
  uz: string
  ru: string
  en: string
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseUrl as string
  const toast = useToast()

  // Create typed client
  const client = createClient<paths>({ baseUrl: baseURL })

  // Track if we're currently refreshing to avoid infinite loops
  let isRefreshing = false

  // Setup interceptors
  client.use({
    onRequest({ request }) {
      if (process.client) {
        const token = localStorage.getItem('auth_token')
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      }
      return request
    },
    async onResponse({ response, request }) {
      // Handle 401 - Unauthorized (faqat 401 da token refresh)
      if (response.status === 401 && process.client && !isRefreshing) {
        const authStore = useAuthStore()

        // Agar refresh token bo'lsa, yangilashga harakat qilamiz
        if (authStore.refreshToken) {
          isRefreshing = true

          try {
            const refreshed = await authStore.refreshAccessToken()

            if (refreshed) {
              // Token muvaffaqiyatli yangilandi
              // Original so'rovni qayta yuboramiz
              const newToken = localStorage.getItem('auth_token')
              if (newToken) {
                request.headers.set('Authorization', `Bearer ${newToken}`)

                // So'rovni qayta yuborish
                const retryResponse = await fetch(request)
                isRefreshing = false
                return retryResponse
              }
            }
          } catch (error) {
            console.error('Token refresh failed:', error)
          } finally {
            isRefreshing = false
          }
        }

        // Agar refresh muvaffaqiyatsiz bo'lsa yoki refresh token bo'lmasa, logout
        authStore.logout()
      }

      // Handle 400 - Bad Request with custom error format
      if (response.status === 400 && process.client) {
        try {
          const errorData = await response.clone().json() as ErrorResponse

          if (errorData && !errorData.success && errorData.key) {
            // Get current language (default: uz)
            const currentLang = (localStorage.getItem('user-locale') || 'uz') as 'uz' | 'ru' | 'en'
            const errorMessage = errorData[currentLang] || errorData.uz || 'Xatolik yuz berdi'
            const errorTitle = { uz: 'Xato', ru: 'Ошибка', en: 'Error' }[currentLang]

            // Show toast
            toast.add({
              title: errorTitle,
              description: errorMessage,
              color: 'error',
              icon: 'i-heroicons-exclamation-circle'
            })
          }
        } catch (e) {
          console.error('Error parsing error response:', e)
        }
      }

      return response
    },
  })

  // Wrapper methods for simpler syntax
  const api = {
    get: client.GET.bind(client),
    post: client.POST.bind(client),
    put: client.PUT.bind(client),
    patch: client.PATCH.bind(client),
    delete: client.DELETE.bind(client),
  }

  return {
    provide: {
      api,
    },
  }
})
