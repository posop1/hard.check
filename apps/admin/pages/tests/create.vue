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
              variant="ghost" 
              size="sm"
              @click="navigateTo('/tests')"
            >
              <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
              Назад к тестам
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
          Создать новый тест
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Заполните информацию о тесте и настройте параметры
        </p>
      </div>

      <!-- Форма создания теста -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Основная форма -->
        <div class="lg:col-span-2">
          <UCard class="p-6">
            <ClientOnly>
              <form @submit.prevent="handleCreateTest" class="space-y-6">
              <!-- Основная информация -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Основная информация
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Название теста *
                    </label>
                    <UInput
                      v-model="testForm.title"
                      placeholder="Введите название теста"
                      class="flex w-full"
                      :error="errors.title"
                    />
                    <p v-if="errors.title" class="text-sm text-red-600 mt-1">
                      {{ errors.title }}
                    </p>
                    <p v-else id="title-help" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Дайте четкое и понятное название тесту
                    </p>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Описание теста
                    </label>
                    <UTextarea
                      v-model="testForm.description"
                      placeholder="Опишите, что будет проверять этот тест"
                      class="flex w-full"
                      :rows="4"
                    />
                    <p id="description-help" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Опишите содержание и цели теста
                    </p>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Категория
                    </label>
                    <USelect
                      v-model="testForm.category"
                      :options="categories"
                      placeholder="Выберите категорию"
                    />
                  </div>
                </div>
              </div>

              <!-- Настройки теста -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Настройки теста
                </h3>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Время на прохождение (минуты)
                      </label>
                      <UInput
                        v-model="testForm.timeLimit"
                        type="number"
                        placeholder="60"
                        min="1"
                        max="480"
                      />
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Оставьте пустым для неограниченного времени
                      </p>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Количество вопросов
                      </label>
                      <UInput
                        v-model="testForm.questionsCount"
                        type="number"
                        placeholder="20"
                        min="1"
                        max="100"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Проходной балл (%)
                      </label>
                      <UInput
                        v-model="testForm.passingScore"
                        type="number"
                        placeholder="70"
                        min="0"
                        max="100"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Максимальный балл
                      </label>
                      <UInput
                        v-model="testForm.maxScore"
                        type="number"
                        placeholder="100"
                        min="1"
                        max="1000"
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <UCheckbox
                      v-model="testForm.showResults"
                      label="Показывать результаты сразу после завершения"
                    />
                    <UCheckbox
                      v-model="testForm.allowRetake"
                      label="Разрешить повторное прохождение"
                    />
                    <UCheckbox
                      v-model="testForm.randomizeQuestions"
                      label="Перемешивать вопросы"
                    />
                    <UCheckbox
                      v-model="testForm.showCorrectAnswers"
                      label="Показывать правильные ответы"
                    />
                  </div>
                </div>
              </div>

              <!-- Кнопки действий -->
              <div class="flex space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <UButton 
                  type="submit" 
                  :loading="loading"
                  :disabled="!isFormValid"
                  size="lg"
                >
                  <UIcon name="i-heroicons-plus-circle" class="w-5 h-5 mr-2" />
                  Создать тест
                </UButton>
                <UButton 
                  variant="soft" 
                  @click="handleSaveDraft"
                  :loading="draftLoading"
                  size="lg"
                >
                  <UIcon name="i-heroicons-document" class="w-5 h-5 mr-2" />
                  Сохранить черновик
                </UButton>
                <UButton 
                  variant="ghost" 
                  @click="handleCancel"
                  size="lg"
                >
                  Отменить
                </UButton>
              </div>
            </form>
            </ClientOnly>
          </UCard>
        </div>

        <!-- Боковая панель -->
        <div class="space-y-6">
          <!-- Подсказки -->
          <UCard class="p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              💡 Подсказки
            </h4>
            <div class="space-y-3 text-sm">
              <div class="flex items-start space-x-2">
                <UIcon name="i-heroicons-light-bulb" class="w-4 h-4 text-yellow-500 mt-0.5" />
                <p class="text-gray-600 dark:text-gray-400">
                  Дайте четкое и понятное название тесту
                </p>
              </div>
              <div class="flex items-start space-x-2">
                <UIcon name="i-heroicons-light-bulb" class="w-4 h-4 text-yellow-500 mt-0.5" />
                <p class="text-gray-600 dark:text-gray-400">
                  Установите разумное время на прохождение
                </p>
              </div>
              <div class="flex items-start space-x-2">
                <UIcon name="i-heroicons-light-bulb" class="w-4 h-4 text-yellow-500 mt-0.5" />
                <p class="text-gray-600 dark:text-gray-400">
                  Проходной балл обычно 60-80%
                </p>
              </div>
            </div>
          </UCard>

          <!-- Статистика -->
          <UCard class="p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📊 Статистика
            </h4>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Всего тестов:</span>
                <span class="text-gray-900 dark:text-white font-medium">{{ totalTests }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Активных:</span>
                <span class="text-gray-900 dark:text-white font-medium">{{ activeTests }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Черновиков:</span>
                <span class="text-gray-900 dark:text-white font-medium">{{ draftTests }}</span>
              </div>
            </div>
          </UCard>

          <!-- Быстрые действия -->
          <UCard class="p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ⚡ Быстрые действия
            </h4>
            <div class="space-y-3">
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/questions')"
              >
                <UIcon name="i-heroicons-plus-circle" class="w-4 h-4 mr-2" />
                Добавить вопросы
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/tests')"
              >
                <UIcon name="i-heroicons-document-text" class="w-4 h-4 mr-2" />
                Мои тесты
              </UButton>
              <UButton 
                variant="soft" 
                block 
                size="sm"
                @click="navigateTo('/dashboard')"
              >
                <UIcon name="i-heroicons-home" class="w-4 h-4 mr-2" />
                На дашборд
              </UButton>
            </div>
          </UCard>
        </div>
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
const { user, api } = useAuth()
const { createTest, refreshTests } = useTests()

// Типы
interface TestForm {
  title: string
  description: string
  category: string
  timeLimit: string
  questionsCount: string
  passingScore: string
  maxScore: string
  showResults: boolean
  allowRetake: boolean
  randomizeQuestions: boolean
  showCorrectAnswers: boolean
}

interface FormErrors {
  title?: string
  description?: string
  category?: string
  timeLimit?: string
  questionsCount?: string
  passingScore?: string
  maxScore?: string
}

// Реактивные данные
const loading = ref(false)
const draftLoading = ref(false)
const errors = ref<FormErrors>({})

// Форма теста
const testForm = ref<TestForm>({
  title: '',
  description: '',
  category: '',
  timeLimit: '',
  questionsCount: '',
  passingScore: '70',
  maxScore: '100',
  showResults: true,
  allowRetake: false,
  randomizeQuestions: true,
  showCorrectAnswers: false
})

// Категории тестов
const categories = [
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

// Статистика (заглушка)
const totalTests = ref(5)
const activeTests = ref(3)
const draftTests = ref(2)

// Вычисляемые свойства
const isFormValid = computed(() => {
  return testForm.value.title.trim().length > 0 &&
         testForm.value.questionsCount &&
         parseInt(testForm.value.questionsCount) > 0
})

// Методы валидации
const validateForm = () => {
  errors.value = {}

  if (!testForm.value.title.trim()) {
    errors.value.title = 'Название теста обязательно'
  }

  if (!testForm.value.questionsCount) {
    errors.value.questionsCount = 'Укажите количество вопросов'
  } else if (parseInt(testForm.value.questionsCount) < 1) {
    errors.value.questionsCount = 'Минимум 1 вопрос'
  }

  if (testForm.value.timeLimit && parseInt(testForm.value.timeLimit) < 1) {
    errors.value.timeLimit = 'Время должно быть больше 0'
  }

  if (testForm.value.passingScore && parseInt(testForm.value.passingScore) > 100) {
    errors.value.passingScore = 'Проходной балл не может быть больше 100%'
  }

  return Object.keys(errors.value).length === 0
}

// Создание теста
const handleCreateTest = async () => {
  if (!validateForm()) return

  loading.value = true
  try {
    const testData = {
      title: testForm.value.title.trim(),
      description: testForm.value.description.trim(),
      category: testForm.value.category,
      timeLimit: testForm.value.timeLimit ? parseInt(testForm.value.timeLimit) : undefined,
      questionsCount: parseInt(testForm.value.questionsCount),
      passingScore: parseInt(testForm.value.passingScore),
      maxScore: parseInt(testForm.value.maxScore),
      settings: {
        showResults: testForm.value.showResults,
        allowRetake: testForm.value.allowRetake,
        randomizeQuestions: testForm.value.randomizeQuestions,
        showCorrectAnswers: testForm.value.showCorrectAnswers
      }
    }

    console.log('Создание теста с данными:', testData)
    const result = await createTest(testData)
    console.log('Результат создания теста:', result)

    if (result.success) {
      console.log('Тест создан успешно:', result.data)
      
      const toast = useToast()
      toast.add({
        title: 'Тест создан',
        description: 'Тест успешно создан и добавлен в список',
        icon: 'i-heroicons-check-circle',
        color: 'success'
      })

      // Перенаправление на список тестов
      await navigateTo('/tests')
    } else {
      const toast = useToast()
      toast.add({
        title: 'Ошибка',
        description: result.error || 'Не удалось создать тест',
        icon: 'i-heroicons-x-circle',
        color: 'error'
      })
    }
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось создать тест',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

// Сохранение черновика
const handleSaveDraft = async () => {
  draftLoading.value = true
  try {
    const testData = {
      ...testForm.value,
      status: 'draft'
    }

    // Здесь будет вызов API для сохранения черновика
    console.log('Сохранение черновика:', testData)

    const toast = useToast()
    toast.add({
      title: 'Черновик сохранен',
      description: 'Тест сохранен как черновик',
      icon: 'i-heroicons-check-circle',
      color: 'success'
    })

    await navigateTo('/tests')
  } catch (error) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка',
      description: 'Не удалось сохранить черновик',
      icon: 'i-heroicons-x-circle',
      color: 'error'
    })
  } finally {
    draftLoading.value = false
  }
}

// Отмена создания
const handleCancel = () => {
  navigateTo('/tests')
}

// SEO
useHead({
  title: 'Создать тест - HardCheck Admin',
  meta: [
    {
      name: 'description',
      content: 'Создание нового теста в системе HardCheck'
    }
  ]
})
</script> 