export default defineNuxtRouteMiddleware((to) => {
  // Проверяем аутентификацию только на клиенте
  if (process.client) {
    const { isAuthenticated } = useAuth()
    
    // Если пользователь не авторизован и пытается попасть на защищенную страницу
    if (!isAuthenticated.value && to.path !== '/') {
      return navigateTo('/')
    }
    
    // Если пользователь авторизован и находится на странице входа
    if (isAuthenticated.value && to.path === '/') {
      return navigateTo('/dashboard')
    }
  } else {
    // На сервере просто пропускаем, чтобы избежать проблем с гидратацией
    return
  }
}) 