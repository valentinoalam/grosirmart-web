export default defineNuxtConfig({
  compatibilityDate: '2024-07-24',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/global.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/apollo.ts'],
  modules: [
    '@nuxtjs/tailwindcss',
    'daisy-ui-kit/nuxt',
    '@nuxt/eslint',
    'nuxt-apollo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    "nuxt-gtag"
  ],
  apollo: {
    httpEndpoint: 'http://localhost:3000/graphql',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  daisy: {
    prefix: 'Da',
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
});