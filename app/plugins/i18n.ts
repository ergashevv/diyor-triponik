import { createI18n } from 'vue-i18n'

const locales = ['uz_la', 'uz_cr', 'ru', 'en']
const messages: Record<string, Record<string, string>> = {}

export const i18nPromise = (async () => {
  // Load and merge translations from both akbarshoh and anvarjon
  for (const locale of locales) {
    // Load akbarshoh translations
    const akbarshohMessages = await import(`../../locales/akbarshoh/${locale}.json`).then(
      (m) => m.default as Record<string, string>
    )

    // Load anvarjon translations
    const anvarjonMessages = await import(`../../locales/anvarjon/${locale}.json`).then(
      (m) => m.default as Record<string, string>
    )

    // Load akbarjon translations
    const akbarjonMessages = await import(`../../locales/akbarjon/${locale}.json`).then(
      (m) => m.default as Record<string, string>
    )

    // Merge both (anvarjon will override akbarshoh if same keys exist)
    messages[locale] = {
      ...akbarshohMessages,
      ...anvarjonMessages,
      ...akbarjonMessages
    }
  }

  const i18n = createI18n({
    legacy: false,
    locale: 'uz',
    fallbackLocale: 'uz',
    globalInjection: true,
    messages,
  })

  return i18n
})()

export default defineNuxtPlugin(async (nuxtApp) => {
  const i18n = await i18nPromise

  const setLocale = (newLocale: string) => {
    if (locales.includes(newLocale)) {
      i18n.global.locale.value = newLocale
      localStorage.setItem('user-locale', newLocale)
    }
  }

  // Get from localStorage on init
  if (process.client) {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }

  nuxtApp.provide('setLocale', setLocale)
  nuxtApp.provide('currentLocale', i18n.global.locale)
  nuxtApp.provide('i18nInstance', i18n)

  nuxtApp.vueApp.use(i18n)
})
