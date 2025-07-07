// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-07',
  devtools: { enabled: true },

  // CSS файлы
  css: ['./assets/css/main.css'],

  // UI библиотека
  modules: ['@nuxt/ui'],
  
  // Настройки сервера
  devServer: {
    port: 3000,
  },

  // Автоматический импорт компонентов из стандартных папок Nuxt
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // TypeScript конфигурация
  typescript: {
    typeCheck: true
  }
})
