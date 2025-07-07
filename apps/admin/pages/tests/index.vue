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
              variant="soft" 
              size="sm"
              @click="navigateTo('/tests/create')"
            >
              <UIcon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
              Создать тест
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Мои тесты
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Управление созданными тестами
        </p>
      </div>

      <!-- Фильтры и поиск -->
      <div class="mb-6">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <UInput
              v-model="searchQuery"
              placeholder="Поиск по названию теста..."
              icon="i-heroicons-magnifying-glass"
            />
          </div>
          <USelect
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Все статусы"
            class="w-full sm:w-48"
          />
          <USelect
            v-model="categoryFilter"
            :options="categoryOptions"
            placeholder="Все категории"
            class="w-full sm:w-48"
          />
        </div>
      </div>

      <!-- Список тестов -->
      <ClientOnly>
        <div v-if="filteredTests.length === 0" class="text-center py-12">
          <UIcon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ searchQuery || statusFilter || categoryFilter ? 'Тесты не найдены' : 'У вас пока нет тестов' }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">
            {{ searchQuery || statusFilter || categoryFilter ? 'Попробуйте изменить фильтры' : 'Создайте свой первый тест для начала работы' }}
          </p>
          <UButton 
            variant="soft" 
            size="lg"
            @click="navigateTo('/tests/create')"
          >
            <UIcon name="i-heroicons-plus-circle" class="w-5 h-5 mr-2" />
            Создать первый тест
          </UButton>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard 
          v-for="test in filteredTests" 
          :key="test.id"
          class="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          @click="navigateTo(`/tests/${test.id}`)"
        >
          <!-- Заголовок и статус -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {{ test.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ test.description || 'Без описания' }}
              </p>
            </div>
            <UDropdownMenu>
              <UButton
                variant="ghost"
                size="sm"
                icon="i-heroicons-ellipsis-vertical"
                @click.stop
              />
              <template #content>
                <div
                  v-for="action in getTestActions(test)"
                  :key="action.label"
                  class="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  :class="action.class"
                  @click="action.click"
                >
                  <UIcon :name="action.icon" class="w-4 h-4 mr-2" />
                  {{ action.label }}
                </div>
              </template>
            </UDropdownMenu>
          </div>

          <!-- Статистика -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p class="text-lg font-bold text-blue-600">{{ test.questionsCount }}</p>
              <p class="text-xs text-gray-600 dark:text-gray-400">Вопросов</p>
            </div>
            <div class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-lg font-bold text-green-600">{{ test.completedCount || 0 }}</p>
              <p class="text-xs text-gray-600 dark:text-gray-400">Завершено</p>
            </div>
          </div>

          <!-- Информация -->
          <div class="space-y-2 text-sm">
            <div class="flex items-center justify-between">
              <span class="text-gray-600 dark:text-gray-400">Категория:</span>
              <span class="text-gray-900 dark:text-white">{{ getCategoryLabel(test.category) }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600 dark:text-gray-400">Время:</span>
              <span class="text-gray-900 dark:text-white">
                {{ test.timeLimit ? `${test.timeLimit} мин` : 'Не ограничено' }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600 dark:text-gray-400">Проходной балл:</span>
              <span class="text-gray-900 dark:text-white">{{ test.passingScore }}%</span>
            </div>
          </div>

          <!-- Статус -->
          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <UBadge :color="test.status === 'active' ? 'success' : 'warning'" variant="soft">
                {{ test.status === 'active' ? 'Активен' : 'Черновик' }}
              </UBadge>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatDate(test.createdAt) }}
              </span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Пагинация -->
      <div v-if="filteredTests.length > 0" class="mt-8 flex justify-center">
        <UPagination
          v-model="currentPage"
          :total="totalPages"
        />
      </div>
      </ClientOnly>
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
const { user, api } = useAuth()
const { tests, loading, loadTests, getFilteredTests, deleteTest: deleteTestFromStore } = useTests()

// Реактивные данные
const searchQuery = ref('')
const statusFilter = ref('')
const categoryFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 9

// Фильтры
const statusOptions = [
  { label: 'Все статусы', value: '' },
  { label: 'Активные', value: 'active' },
  { label: 'Черновики', value: 'draft' }
]

const categoryOptions = [
  { label: 'Все категории', value: '' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React', value: 'react' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'PHP', value: 'php' },
  { label: 'SQL', value: 'sql' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Другое', value: 'other' }
]

// Типы
interface Test {
  id: string
  title: string
  description: string
  category: string
  status: 'active' | 'draft'
  questionsCount: number
  timeLimit?: number
  passingScore: number
  maxScore: number
  completedCount?: number
  createdAt: string
  lastCompleted?: string
}

// Вычисляемые свойства
const filteredTests = computed(() => {
  return getFilteredTests({
    search: searchQuery.value,
    status: statusFilter.value,
    category: categoryFilter.value
  })
})

const totalPages = computed(() => 
  Math.ceil(filteredTests.value.length / itemsPerPage)
)

const getCategoryLabel = (category: string) => {
  const option = categoryOptions.find(opt => opt.value === category)
  return option ? option.label : 'Другое'
}

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(dateString))
}

interface TestAction {
  label: string
  icon: string
  click: () => void
  class?: string
}

const getTestActions = (test: Test): TestAction[] => [
  {
    label: 'Редактировать',
    icon: 'i-heroicons-pencil-square',
    click: () => navigateTo(`/tests/${test.id}/edit`)
  },
  {
    label: 'Просмотреть результаты',
    icon: 'i-heroicons-chart-bar',
    click: () => navigateTo(`/tests/${test.id}/results`)
  },
  {
    label: test.status === 'active' ? 'Деактивировать' : 'Активировать',
    icon: test.status === 'active' ? 'i-heroicons-pause' : 'i-heroicons-play',
    click: () => toggleTestStatus(test)
  },
  {
    label: 'Дублировать',
    icon: 'i-heroicons-document-duplicate',
    click: () => duplicateTest(test)
  },
  {
    label: 'Удалить',
    icon: 'i-heroicons-trash',
    click: () => deleteTest(test),
    class: 'text-red-600 dark:text-red-400'
  }
]

const toggleTestStatus = async (test: Test) => {
  try {
    // Здесь будет вызов API для изменения статуса
    const toast = useToast()
    toast.add({
      title: 'Статус изменен',
      description: `Тест "${test.title}" ${test.status === 'active' ? 'деактивирован' : 'активирован'}`,
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось изменить статус теста',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  }
}

const duplicateTest = async (test: Test) => {
  try {
    // Здесь будет вызов API для дублирования теста
    const toast = useToast()
    toast.add({
      title: 'Тест скопирован',
      description: `Тест "${test.title}" успешно скопирован`,
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось скопировать тест',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  }
}

const deleteTest = async (test: Test) => {
  try {
    const result = await deleteTestFromStore(test.id)
    
    if (result.success) {
      const toast = useToast()
      toast.add({
        title: 'Тест удален',
        description: `Тест "${test.title}" успешно удален`,
        icon: 'i-heroicons-check-circle',
        color: 'success'
      })
    } else {
      const toast = useToast()
      toast.add({
        title: 'Ошибка',
        description: result.error || 'Не удалось удалить тест',
        icon: 'i-heroicons-x-circle',
        color: 'error'
      })
    }
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось удалить тест',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  }
}

// Загружаем тесты при монтировании
onMounted(async () => {
  await loadTests(true) // Принудительная загрузка
  console.log('Список тестов: загружено тестов:', tests.value.length)
  console.log('Тесты в списке:', tests.value.map(t => ({ id: t.id, title: t.title })))
})

// SEO
useHead({
  title: 'Мои тесты - HardCheck Admin',
  meta: [
    {
      name: 'description',
      content: 'Управление созданными тестами в системе HardCheck'
    }
  ]
})
</script> 