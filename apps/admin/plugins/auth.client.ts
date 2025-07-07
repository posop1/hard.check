export default defineNuxtPlugin(async () => {
  const { initAuth } = useAuth()
  
  // Инициализируем аутентификацию при загрузке приложения
  initAuth()
}) 