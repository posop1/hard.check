// Плагин для инициализации тестов на клиентской стороне
export default defineNuxtPlugin(() => {
  const { loadTests } = useTests()
  
  // Инициализируем тесты только на клиенте
  if (process.client) {
    // Загружаем тесты после инициализации аутентификации
    setTimeout(() => {
      loadTests()
    }, 100)
  }
}) 