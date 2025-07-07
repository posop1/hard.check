<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Логотип -->
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-cpu-chip" class="w-8 h-8 text-blue-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              HardCheck Admin
            </span>
          </div>

          <!-- Навигация -->
          <div class="flex items-center space-x-4">
            <UButton 
              variant="ghost" 
              size="sm"
              @click="navigateTo('/dashboard')"
            >
              <UIcon name="i-heroicons-home" class="w-4 h-4 mr-2" />
              Дашборд
            </UButton>
            <UButton 
              variant="ghost" 
              size="sm"
              @click="handleLogout"
            >
              <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4 mr-2" />
              Выйти
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Личный кабинет
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Управление профилем и настройками организации
        </p>
      </div>

      <!-- Основная информация -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Профиль -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Информация об организации -->
          <UCard class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Информация об организации
              </h3>
              <UButton 
                variant="soft" 
                size="sm"
                @click="editMode = !editMode"
              >
                <UIcon name="i-heroicons-pencil-square" class="w-4 h-4 mr-2" />
                {{ editMode ? 'Отменить' : 'Редактировать' }}
              </UButton>
            </div>

            <form @submit.prevent="handleUpdateProfile" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Название организации
                </label>
                <UInput
                  v-model="profileForm.name"
                  :disabled="!editMode"
                  placeholder="Введите название организации"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <UInput
                  v-model="profileForm.email"
                  :disabled="!editMode"
                  type="email"
                  placeholder="Введите email"
                />
              </div>

              <div v-if="editMode" class="flex space-x-3">
                <UButton 
                  type="submit" 
                  :loading="loading"
                  :disabled="!editMode"
                >
                  Сохранить изменения
                </UButton>
                <UButton 
                  variant="soft" 
                  @click="cancelEdit"
                  :disabled="!editMode"
                >
                  Отменить
                </UButton>
              </div>
            </form>
          </UCard>

          <!-- Изменение пароля -->
          <UCard class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Изменение пароля
            </h3>

            <form @submit.prevent="handleChangePassword" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Текущий пароль
                </label>
                <UInput
                  v-model="passwordForm.currentPassword"
                  type="password"
                  placeholder="Введите текущий пароль"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Новый пароль
                </label>
                <UInput
                  v-model="passwordForm.newPassword"
                  type="password"
                  placeholder="Введите новый пароль"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Подтвердите новый пароль
                </label>
                <UInput
                  v-model="passwordForm.confirmPassword"
                  type="password"
                  placeholder="Подтвердите новый пароль"
                />
              </div>

              <UButton 
                type="submit" 
                :loading="passwordLoading"
                :disabled="!isPasswordFormValid"
              >
                Изменить пароль
              </UButton>
            </form>
          </UCard>

          <!-- Статистика -->
          <UCard class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Статистика организации
            </h3>

            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p class="text-2xl font-bold text-blue-600">0</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Созданных тестов</p>
              </div>
              <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p class="text-2xl font-bold text-green-600">0</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Активных тестов</p>
              </div>
              <div class="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p class="text-2xl font-bold text-purple-600">0</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Кандидатов</p>
              </div>
              <div class="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p class="text-2xl font-bold text-orange-600">0</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Завершенных тестов</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Боковая панель -->
        <div class="space-y-6">
          <!-- Аватар и основная информация -->
          <UCard class="p-6 text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-blue-600" />
            </div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ user?.name }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {{ user?.email }}
            </p>
            <UBadge color="success" variant="soft">
              Активна
            </UBadge>
          </UCard>

          <!-- Быстрые действия -->
          <UCard class="p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Быстрые действия
            </h4>
            <div class="space-y-3">
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/dashboard')"
              >
                <UIcon name="i-heroicons-home" class="w-4 h-4 mr-2" />
                Вернуться на дашборд
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/tests')"
              >
                <UIcon name="i-heroicons-document-text" class="w-4 h-4 mr-2" />
                Управление тестами
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/questions')"
              >
                <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 mr-2" />
                Управление вопросами
              </UButton>
            </div>
          </UCard>

          <!-- Информация о системе -->
          <UCard class="p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Информация о системе
            </h4>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Версия:</span>
                <span class="text-gray-900 dark:text-white">1.0.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Дата регистрации:</span>
                <span class="text-gray-900 dark:text-white">{{ formatDate(new Date()) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Последний вход:</span>
                <span class="text-gray-900 dark:text-white">{{ formatDate(new Date()) }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Middleware для проверки аутентификации
definePageMeta({
  middleware: 'auth'
})

// Инициализация аутентификации
const { user, logout, api } = useAuth()

// Реактивные данные
const editMode = ref(false)
const loading = ref(false)
const passwordLoading = ref(false)

// Формы
const profileForm = ref({
  name: user.value?.name || '',
  email: user.value?.email || ''
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Вычисляемые свойства
const isPasswordFormValid = computed(() => {
  return passwordForm.value.currentPassword && 
         passwordForm.value.newPassword && 
         passwordForm.value.confirmPassword &&
         passwordForm.value.newPassword === passwordForm.value.confirmPassword &&
         passwordForm.value.newPassword.length >= 6
})

// Методы
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const cancelEdit = () => {
  editMode.value = false
  profileForm.value = {
    name: user.value?.name || '',
    email: user.value?.email || ''
  }
}

const handleUpdateProfile = async () => {
  loading.value = true
  try {
    // Здесь будет вызов API для обновления профиля
    const toast = useToast()
    toast.add({
      title: 'Профиль обновлен',
      description: 'Информация об организации успешно обновлена',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })
    editMode.value = false
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось обновить профиль',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

const handleChangePassword = async () => {
  if (!isPasswordFormValid.value) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Пароли не совпадают или слишком короткие',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
    return
  }

  passwordLoading.value = true
  try {
    // Здесь будет вызов API для изменения пароля
    const toast = useToast()
    toast.add({
      title: 'Пароль изменен',
      description: 'Пароль успешно обновлен',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })
    
    // Очищаем форму
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось изменить пароль',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    passwordLoading.value = false
  }
}

const handleLogout = async () => {
  await logout()
  await navigateTo('/')
}

// Инициализация формы при загрузке
onMounted(() => {
  profileForm.value = {
    name: user.value?.name || '',
    email: user.value?.email || ''
  }
})

// SEO
useHead({
  title: 'Личный кабинет - HardCheck Admin',
  meta: [
    {
      name: 'description',
      content: 'Управление профилем и настройками организации в системе HardCheck'
    }
  ]
})
</script> 