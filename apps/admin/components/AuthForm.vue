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

// Инициализация аутентификации
const { login, register, isAuthenticated } = useAuth()

// Реактивные данные
const activeTab = ref<'login' | 'register'>('login')
const loading = ref(false)

// Проверка аутентификации при загрузке
onMounted(() => {
  if (isAuthenticated.value) {
    navigateTo('/dashboard')
  }
})

// Обработчик входа
const handleLogin = async (data: LoginData) => {
  loading.value = true
  try {
    const result = await login(data)
    
    if (result.success) {
      const toast = useToast()
      toast.add({
        title: 'Успешный вход',
        description: 'Добро пожаловать в HardCheck!',
        icon: 'i-heroicons-check-circle',
        color: 'success'
      })

      // Перенаправление на дашборд
      await navigateTo('/dashboard')
    } else {
      const toast = useToast()
      toast.add({
        title: 'Ошибка входа',
        description: result.error || 'Неверный email или пароль',
        icon: 'i-heroicons-x-circle',
        color: 'error'
      })
    }
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка входа',
      description: 'Произошла ошибка при входе в систему',
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
    const result = await register({
      email: data.email,
      password: data.password,
      name: data.organization
    })
    
    if (result.success) {
      const toast = useToast()
      toast.add({
        title: 'Успешная регистрация',
        description: 'Аккаунт создан! Добро пожаловать в HardCheck!',
        icon: 'i-heroicons-check-circle',
        color: 'success'
      })

      // Перенаправление на дашборд
      await navigateTo('/dashboard')
    } else {
      const toast = useToast()
      toast.add({
        title: 'Ошибка регистрации',
        description: result.error || 'Произошла ошибка при создании аккаунта',
        icon: 'i-heroicons-x-circle',
        color: 'error'
      })
    }
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка регистрации',
      description: 'Произошла ошибка при регистрации',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script> 