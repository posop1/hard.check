<template>
  <div class="w-full max-w-md">
    <!-- Логотип -->
    <div class="text-center mb-8">
      <div class="flex items-center justify-center space-x-2 mb-4">
        <UIcon name="i-heroicons-cpu-chip" class="w-8 h-8 text-blue-600" />
        <span class="text-2xl font-bold text-gray-900 dark:text-white">
          HardCheck
        </span>
      </div>
      <p class="text-gray-600 dark:text-gray-300">
        Платформа оценки IT-кадров
      </p>
    </div>

    <!-- Карточка с формами -->
    <UCard class="p-6 shadow-lg">
      <!-- Переключатель форм -->
      <div class="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-6">
        <button

          :class="[
            'flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors',
            activeTab === 'login'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          ]"
                    @click="activeTab = 'login'"
        >
          Вход
        </button>
        <button

          :class="[
            'flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors',
            activeTab === 'register'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          ]"
          @click="activeTab = 'register'"
        >
          Регистрация
        </button>
      </div>

      <!-- Форма входа -->
      <AuthLoginForm 
        v-if="activeTab === 'login'"
        :loading="loading" 
        @submit="handleLogin"
      />

      <!-- Форма регистрации -->
      <AuthRegisterForm 
        v-if="activeTab === 'register'"
        :loading="loading"
        @submit="handleRegister"
        @success="() => activeTab = 'login'"
      />
    </UCard>

    <!-- Футер -->
    <div class="text-center mt-6">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        © 2025 HardCheck. Все права защищены.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">


interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  email: string
  organization: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

// Реактивные данные
const activeTab = ref<'login' | 'register'>('login')
const loading = ref(false)

// Обработчик входа
const handleLogin = async (data: LoginData) => {
  loading.value = true
  try {
    // Здесь будет вызов фичи авторизации
    console.log('Попытка входа:', data)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const toast = useToast()
    toast.add({
      title: 'Успешный вход',
      description: 'Добро пожаловать в HardCheck!',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })

    // Здесь будет перенаправление на дашборд
    // await navigateTo('/dashboard')
    
  } catch {
    const toast = useToast()
    toast.add({
      title: 'Ошибка входа',
      description: 'Неверный email или пароль',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

// Обработчик регистрации
const handleRegister = async (data: RegisterData) => {
  loading.value = true
  try {
    console.log('Попытка регистрации:', data)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const toast = useToast()
    toast.add({
      title: 'Успешная регистрация',
      description: 'Аккаунт создан! Проверьте email для подтверждения.',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })

    // Переключение на форму входа произойдет через событие @success
    
  } catch {
    const toast = useToast()
    toast.add({
      title: 'Ошибка регистрации',
      description: 'Произошла ошибка при создании аккаунта',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script> 