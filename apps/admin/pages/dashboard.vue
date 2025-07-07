<template>
  <ClientOnly>
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

            <!-- Пользователь -->
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ user?.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ user?.email }}
                </p>
              </div>
              <UButton 
                variant="ghost" 
                size="sm"
                @click="navigateTo('/profile')"
              >
                <UIcon name="i-heroicons-user-circle" class="w-4 h-4 mr-2" />
                Профиль
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
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Приветствие -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Добро пожаловать, {{ user?.name }}!
          </h1>
          <p class="text-gray-600 dark:text-gray-300">
            Панель управления системой тестирования IT-кадров
          </p>
        </div>

        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <UCard class="p-6">
            <div class="flex items-center">
              <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ stats.total }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Тестов</p>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <div class="flex items-center">
              <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ stats.totalQuestions }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Вопросов</p>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <div class="flex items-center">
              <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-users" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ stats.active }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Активных тестов</p>
              </div>
            </div>
          </UCard>

          <UCard class="p-6">
            <div class="flex items-center">
              <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-chart-bar" class="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ stats.totalCompleted }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Результатов</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Быстрые действия -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UCard class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Быстрые действия
            </h3>
            <div class="space-y-3">
              <UButton 
                variant="soft" 
                block 
                size="lg"
                @click="navigateTo('/tests/create')"
              >
                <UIcon name="i-heroicons-plus-circle" class="w-5 h-5 mr-2" />
                Создать новый тест
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="lg"
                @click="navigateTo('/questions')"
              >
                <UIcon name="i-heroicons-plus-circle" class="w-5 h-5 mr-2" />
                Добавить вопросы
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="lg"
                @click="navigateTo('/results')"
              >
                <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 mr-2" />
                Просмотреть результаты
              </UButton>
            </div>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Последняя активность
            </h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-blue-500" />
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    Добро пожаловать в систему
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Только что
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Блоки тестов -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Мои тесты -->
          <UCard class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Мои тесты
              </h3>
              <UButton 
                variant="soft" 
                size="sm"
                @click="navigateTo('/tests/create')"
              >
                <UIcon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
                Создать
              </UButton>
            </div>

            <div v-if="myTests.length === 0" class="text-center py-8">
              <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p class="text-gray-500 dark:text-gray-400 mb-4">
                У вас пока нет созданных тестов
              </p>
              <UButton 
                variant="soft" 
                size="sm"
                @click="navigateTo('/tests/create')"
              >
                Создать первый тест
              </UButton>
            </div>

            <div v-else class="space-y-3">
              <div 
                v-for="test in myTests.slice(0, 3)" 
                :key="test.id"
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                @click="navigateTo(`/tests/${test.id}`)"
              >
                <div class="flex items-center space-x-3">
                  <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <UIcon name="i-heroicons-document-text" class="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ test.title }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ test.questionsCount }} вопросов
                    </p>
                  </div>
                </div>
                <UBadge :color="test.status === 'active' ? 'success' : 'warning'" variant="soft" size="sm">
                  {{ test.status === 'active' ? 'Активен' : 'Черновик' }}
                </UBadge>
              </div>

              <div v-if="myTests.length > 3" class="text-center pt-2">
                <UButton 
                  variant="ghost" 
                  size="sm"
                  @click="navigateTo('/tests')"
                >
                  Показать все ({{ myTests.length }})
                </UButton>
              </div>
            </div>
          </UCard>

          <!-- Готовые тесты -->
          <UCard class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Готовые тесты
              </h3>
              <UButton 
                variant="soft" 
                size="sm"
                @click="navigateTo('/tests/ready')"
              >
                <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-2" />
                Все
              </UButton>
            </div>

            <div v-if="readyTests.length === 0" class="text-center py-8">
              <UIcon name="i-heroicons-check-circle" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p class="text-gray-500 dark:text-gray-400 mb-4">
                Нет готовых тестов для прохождения
              </p>
              <p class="text-xs text-gray-400 dark:text-gray-500">
                Создайте тест и сделайте его активным
              </p>
            </div>

            <div v-else class="space-y-3">
              <div 
                v-for="test in readyTests.slice(0, 3)" 
                :key="test.id"
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                @click="navigateTo(`/tests/${test.id}/results`)"
              >
                <div class="flex items-center space-x-3">
                  <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ test.title }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ test.completedCount }} завершено
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ test.lastCompleted }}
                  </p>
                  <UBadge color="success" variant="soft" size="sm">
                    Готов
                  </UBadge>
                </div>
              </div>

              <div v-if="readyTests.length > 3" class="text-center pt-2">
                <UButton 
                  variant="ghost" 
                  size="sm"
                  @click="navigateTo('/tests/ready')"
                >
                  Показать все ({{ readyTests.length }})
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </main>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
// Middleware для проверки аутентификации
definePageMeta({
  middleware: 'auth'
})

// Инициализация аутентификации и тестов
const { user, logout } = useAuth()
const { tests, loadTests, getStats } = useTests()

// Вычисляемые свойства для тестов
const myTests = computed(() => tests.value)
const readyTests = computed(() => tests.value.filter(test => test.status === 'active'))

// Статистика
const stats = computed(() => getStats())

// Загружаем тесты при монтировании компонента
onMounted(async () => {
  await loadTests(true) // Принудительная загрузка
  console.log('Дашборд: загружено тестов:', tests.value.length)
})

// SEO
useHead({
  title: 'Dashboard - HardCheck Admin',
  meta: [
    {
      name: 'description',
      content: 'Панель управления системой тестирования IT-кадров'
    }
  ]
})

// Обработчик выхода
const handleLogout = async () => {
  await logout()
  await navigateTo('/')
}
</script> 