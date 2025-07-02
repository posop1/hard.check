// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],
  
  devServer: {
    port: 4000,
  },

  // Настройка алиасов для FSD
  alias: {
    '~': '<rootDir>',
    '@': '<rootDir>',
    '@@': '<rootDir>',
    '~/src': '<rootDir>/src',
    '@/shared': '<rootDir>/src/shared',
    '@/entities': '<rootDir>/src/entities',
    '@/features': '<rootDir>/src/features',
    '@/widgets': '<rootDir>/src/widgets',
    '@/pages': '<rootDir>/src/pages',
    '@/app': '<rootDir>/src/app',
  },

  // Автоимпорт компонентов из FSD структуры
  components: [
    '~/components',
    {
      path: '~/src/shared/ui',
      prefix: 'Shared'
    },
    {
      path: '~/src/entities',
      pathPrefix: false,
    },
    {
      path: '~/src/features',
      pathPrefix: false,
    },
    {
      path: '~/src/widgets',
      pathPrefix: false,
    }
  ],

  // Автоимпорт композиций
  imports: {
    dirs: [
      'src/shared/lib',
      'src/entities/*/model',
      'src/features/*/model'
    ]
  },

  // TypeScript конфигурация
  typescript: {
    typeCheck: true
  }
});
