<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="flex items-center justify-center px-4 py-8 min-h-screen">
      <AuthForm />
    </div>
  </div>
</template>

<script setup lang="ts">
// Импорты для SEO
useHead({
  title: 'Вход в систему - HardCheck',
  meta: [
    {
      name: 'description',
      content: 'Войдите в административную панель HardCheck для управления тестированием IT-кадров.'
    }
  ]
})
</script>
