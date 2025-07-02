// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],
  devServer: {
    port: 5001,
  },
});
