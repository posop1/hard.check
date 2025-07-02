<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
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
        <div v-if="activeTab === 'login'">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Войти в систему
          </h2>
          
          <form class="space-y-4" @submit.prevent="handleLogin" >
            <!-- Email -->
            <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <UInput
                v-model="loginForm.email"
                type="email"
                placeholder="example@company.com"
                size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-gray-400" />
                </template>
              </UInput>
            </div>

            <!-- Пароль -->
            <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Пароль
              </label>
              <UInput
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Введите пароль"
                    size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-gray-400" />
                </template>
                <template #trailing>
                  <UButton
                    variant="ghost"
                    size="xs"
                    :disabled="isLoading"
                    @click="showPassword = !showPassword"

                  >
                    <UIcon 
                      :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" 
                      class="w-4 h-4" 
                    />
                  </UButton>
                </template>
              </UInput>
            </div>

            <!-- Кнопка входа -->
            <UButton
              type="submit"
              block
              size="lg"
              :loading="isLoading"
              :disabled="!loginForm.email || !loginForm.password"
            >
              <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4 mr-2" />
              Войти
            </UButton>
          </form>

          <!-- Дополнительные ссылки -->
          <div class="mt-6 text-center">
            <UButton variant="ghost" size="sm" class="text-gray-600 dark:text-gray-400">
              Забыли пароль?
            </UButton>
          </div>
        </div>

        <!-- Форма регистрации -->
        <div v-if="activeTab === 'register'">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Создать аккаунт
          </h2>
          
          <form class="space-y-4" @submit.prevent="handleRegister">
            <!-- Email -->
            <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <UInput
                v-model="registerForm.email"
                type="email"
                placeholder="example@company.com"
                size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-gray-400" />
                </template>
              </UInput>
            </div>

            <!-- Организация -->
            <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Организация
              </label>
              <UInput
                v-model="registerForm.organization"
                type="text"
                placeholder="Название компании"
                size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-building-office" class="w-4 h-4 text-gray-400" />
                </template>
              </UInput>
            </div>

            <!-- Пароль -->
            <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Пароль
              </label>
              <UInput
                v-model="registerForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Минимум 8 символов"
                size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-gray-400" />
                </template>
                <template #trailing>
                  <UButton
                    variant="ghost"
                    size="xs"
                    :disabled="isLoading"
                    @click="showPassword = !showPassword"
                    
                  >
                    <UIcon 
                      :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" 
                      class="w-4 h-4" 
                    />
                  </UButton>
                </template>
              </UInput>
            </div>

            <!-- Подтверждение пароля -->
              <div class="flex flex-col">
              <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Подтвердите пароль
              </label>
              <UInput
                v-model="registerForm.confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Повторите пароль"
                size="xl"
                required
                :disabled="isLoading"
              >
                <template #leading>
                  <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-gray-400" />
                </template>
              </UInput>
              <!-- Ошибка несовпадения паролей -->
              <p 
                v-if="registerForm.password && registerForm.confirmPassword && registerForm.password !== registerForm.confirmPassword"
                class="text-red-500 text-xs mt-1"
              >
                Пароли не совпадают
              </p>
            </div>

            <!-- Согласие с условиями -->
            <div class="flex items-start space-x-3">
              <UCheckbox
                v-model="registerForm.agreeToTerms"
                required
                :disabled="isLoading"
              />
              <label class="text-sm text-gray-600 dark:text-gray-300">
                Я согласен с 
                <UButton variant="link" size="xs" class="p-0 text-blue-600 dark:text-blue-400">
                  условиями использования
                </UButton>
                и
                <UButton variant="link" size="xs" class="p-0 text-blue-600 dark:text-blue-400">
                  политикой конфиденциальности
                </UButton>
              </label>
            </div>

            <!-- Кнопка регистрации -->
            <UButton
              type="submit"
              block
              size="lg"
              :loading="isLoading"
              :disabled="!isRegisterFormValid"
            >
              <UIcon name="i-heroicons-user-plus" class="w-4 h-4 mr-2" />
              Создать аккаунт
            </UButton>
          </form>
        </div>
      </UCard>

      <!-- Футер -->
      <div class="text-center mt-6">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          © 2025 HardCheck. Все права защищены.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Мета-теги для SEO
useHead({
  title: 'Вход в HardCheck - Админ панель',
  meta: [
    { 
      name: 'description', 
      content: 'Войдите в административную панель HardCheck для управления платформой оценки IT-кадров' 
    },
    { 
      name: 'robots', 
      content: 'noindex, nofollow' 
    }
  ]
})

// Реактивные данные
const activeTab = ref('login')
const showPassword = ref(false)
const isLoading = ref(false)

// Данные формы входа
const loginForm = ref({
  email: '',
  password: ''
})

// Данные формы регистрации
const registerForm = ref({
  email: '',
  organization: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

// Валидация формы регистрации
const isRegisterFormValid = computed(() => {
  return (
    registerForm.value.email &&
    registerForm.value.organization &&
    registerForm.value.password &&
    registerForm.value.confirmPassword &&
    registerForm.value.password === registerForm.value.confirmPassword &&
    registerForm.value.password.length >= 8 &&
    registerForm.value.agreeToTerms
  )
})

// Toast для уведомлений
const toast = useToast()

// Обработчик входа
const handleLogin = async () => {
  try {
    isLoading.value = true
    
    // Здесь будет API запрос для входа
    console.log('Попытка входа:', loginForm.value)
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.add({
      title: 'Успешный вход',
      description: 'Добро пожаловать в HardCheck!',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })

    // Перенаправление на дашборд (когда будет готов)
    // await navigateTo('/dashboard')
    
  } catch {
    toast.add({
      title: 'Ошибка входа',
      description: 'Неверный email или пароль',
      icon: 'i-heroicons-x-circle',
      color: 'red'
    })
  } finally {
    isLoading.value = false
  }
}

// Обработчик регистрации
const handleRegister = async () => {
  try {
    isLoading.value = true
    
    // Проверка совпадения паролей
    if (registerForm.value.password !== registerForm.value.confirmPassword) {
      toast.add({
        title: 'Ошибка регистрации',
        description: 'Пароли не совпадают',
        icon: 'i-heroicons-x-circle',
        color: 'red'
      })
      return
    }

    // Здесь будет API запрос для регистрации
    console.log('Попытка регистрации:', {
      email: registerForm.value.email,
      organization: registerForm.value.organization,
      password: registerForm.value.password
    })
    
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.add({
      title: 'Успешная регистрация',
      description: 'Аккаунт создан! Проверьте email для подтверждения.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })

    // Переключение на форму входа
    activeTab.value = 'login'
    
    // Очистка формы регистрации
    registerForm.value = {
      email: '',
      organization: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    }
    
  } catch {
    toast.add({
      title: 'Ошибка регистрации',
      description: 'Произошла ошибка при создании аккаунта',
      icon: 'i-heroicons-x-circle',
      color: 'red'
    })
  } finally {
    isLoading.value = false
  }
}
</script>
