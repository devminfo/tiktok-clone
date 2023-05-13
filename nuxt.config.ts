export default defineNuxtConfig({
  srcDir: 'src/',
  imports: {
    dirs: ['stores/**', 'helpers/**'],
  },
  alias: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  ssr: false,
  runtimeConfig: {
    app: {},
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
  unocss: {
    uno: true,
    attributify: true,
    shortcuts: [],
    rules: [],
  },
  pinia: {
    autoImports: ['defineStore'],
  },
})
