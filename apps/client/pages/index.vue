<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
    <div class="text-center max-w-2xl mx-auto px-6">
      <!-- Иконка -->
      <div class="mb-8">
        <UIcon 
          name="i-heroicons-academic-cap" 
          class="w-24 h-24 text-blue-600 mx-auto mb-4"
        />
          </div>
          
          <!-- Заголовок -->
      <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Добро пожаловать!
          </h1>
      
      <!-- Подзаголовок -->
      <h2 class="text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
        Режим прохождения тестирования
      </h2>
          
          <!-- Описание -->
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
        Здесь будет реализован функционал для прохождения тестов. 
        Система находится в разработке.
          </p>
          
          <!-- Кнопки действий -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton size="lg" class="px-8 py-3">
              <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
          Начать тестирование
            </UButton>
        <UButton variant="outline" size="lg" class="px-8 py-3">
          <UIcon name="i-heroicons-user" class="w-5 h-5 mr-2" />
          Мой профиль
            </UButton>
          </div>
        </div>
  </div>
</template>

<script setup>
// SEO мета-теги
useHead({
  title: 'HardCheck - Прохождение тестирования',
  meta: [
    {
      name: 'description',
      content: 'Платформа для прохождения тестирования и оценки знаний'
    },
    {
      name: 'keywords',
      content: 'тестирование, оценка знаний, экзамены, проверка навыков'
    }
  ]
})
</script>
