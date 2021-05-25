import { derived } from 'svelte/store'
import { register, locale, init, getLocaleFromNavigator } from 'svelte-i18n'

async function setupI18n() {
  register('en', () => import('./lang/en.json'))

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  })
}

const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string')

const dir = derived(locale, ($locale) => ($locale === 'ar' ? 'rtl' : 'ltr'))

export { setupI18n, isLocaleLoaded, dir }
