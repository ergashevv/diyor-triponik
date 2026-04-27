import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    refreshToken: null as string | null,
  }),

  actions: {
    async refreshAccessToken(): Promise<boolean> {
      if (!this.refreshToken) return false

      try {
        const config = useRuntimeConfig()
        const response = await fetch(`${config.public.baseUrl}/auth/refresh`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh_token: this.refreshToken }),
        })

        if (!response.ok) return false

        const data = await response.json()
        if (data.access_token) {
          localStorage.setItem('auth_token', data.access_token)
          if (data.refresh_token) {
            this.refreshToken = data.refresh_token
            localStorage.setItem('refresh_token', data.refresh_token)
          }
          return true
        }
        return false
      } catch {
        return false
      }
    },

    logout() {
      this.refreshToken = null
      localStorage.removeItem('auth_token')
      localStorage.removeItem('refresh_token')
      navigateTo('/login')
    },
  },
})
