// Плагин для инициализации аутентификации на клиентской стороне
export default defineNuxtPlugin(() => {
  const { initAuth } = useAuth()
  
  // Инициализируем аутентификацию только на клиенте
  if (process.client) {
    initAuth()
  }
}) 