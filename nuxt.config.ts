// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',

  modules: ['@nuxt/ui', '@pinia/nuxt'],

  css: ['~/assets/css/main.css'],

  // 🔒 Faqat LIGHT MODE
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '', // dark class umuman qo‘shilmaydi
  },

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },

  runtimeConfig: {
    // Server-side only (private) - Next.js'dagi process.env kabi
    hotelApiBaseUrl: process.env.HOTEL_API_BASE_URL || process.env.NUXT_PUBLIC_HOTEL_API_BASE_URL || 'https://api.triponik.uz',
    hotelApiUsername: process.env.HOTEL_API_USERNAME || 'diyorbek',
    hotelApiPassword: process.env.HOTEL_API_PASSWORD || 'Mulan2025...',

    public: {
      // Client-side accessible (public)
      baseUrl: process.env.BASE_URL || 'https://api.triponik.uz',
      apiBaseUrl: '/api', // Nuxt server API
    }
  }
})
