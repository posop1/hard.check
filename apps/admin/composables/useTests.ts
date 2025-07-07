// Composable для работы с тестами
export const useTests = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase || 'http://localhost:5003'

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

  interface CreateTestData {
    title: string
    description: string
    category: string
    timeLimit?: number
    questionsCount: number
    passingScore: number
    maxScore: number
    settings: {
      showResults: boolean
      allowRetake: boolean
      randomizeQuestions: boolean
      showCorrectAnswers: boolean
    }
  }

  // Состояние тестов
  const tests = useState<Test[]>('hardcheck-tests', () => [])
  const loading = ref(false)
  const initialized = useState<boolean>('hardcheck-tests-initialized', () => false)

  // API клиент
  const api = $fetch.create({
    baseURL: baseURL as string,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Авторизованный API клиент
  const authApi = $fetch.create({
    baseURL: baseURL as string,
    headers: {
      'Content-Type': 'application/json'
    },
    onRequest({ request, options }) {
      const token = useAuth().token.value
      if (token) {
        options.headers = {
          ...options.headers,
          'Authorization': `Bearer ${token}`
        } as any
      }
    }
  })

  // Загрузка тестов
  const loadTests = async (force = false) => {
    console.log('loadTests вызван:', { force, initialized: initialized.value, testsCount: tests.value.length })
    
    // Если уже загружены и инициализированы, и не требуется принудительная загрузка
    if (!force && initialized.value && tests.value.length > 0) {
      console.log('Возвращаем существующие тесты:', tests.value.length)
      return { success: true, data: tests.value }
    }

    loading.value = true
    try {
      // Здесь будет вызов API для загрузки тестов
      // Пока используем моковые данные
      const mockTests: Test[] = [
        {
          id: '1',
          title: 'Тест по JavaScript',
          description: 'Проверка знаний JavaScript',
          category: 'javascript',
          status: 'active',
          questionsCount: 15,
          timeLimit: 60,
          passingScore: 70,
          maxScore: 100,
          completedCount: 5,
          createdAt: '2024-01-15T10:00:00Z',
          lastCompleted: '2 часа назад'
        },
        {
          id: '2',
          title: 'Тест по React',
          description: 'Основы React и компоненты',
          category: 'react',
          status: 'draft',
          questionsCount: 20,
          timeLimit: 90,
          passingScore: 75,
          maxScore: 100,
          completedCount: 0,
          createdAt: '2024-01-10T14:30:00Z'
        },
        {
          id: '3',
          title: 'Тест по Vue.js',
          description: 'Vue.js и его экосистема',
          category: 'vue',
          status: 'active',
          questionsCount: 12,
          timeLimit: 45,
          passingScore: 80,
          maxScore: 100,
          completedCount: 3,
          createdAt: '2024-01-12T09:15:00Z',
          lastCompleted: '1 день назад'
        }
      ]

      // Если это первая загрузка, используем моковые данные
      // Если принудительная загрузка, но у нас уже есть тесты, сохраняем их
      if (!initialized.value) {
        console.log('Первая загрузка тестов:', mockTests.length)
        tests.value = mockTests
      } else if (force && tests.value.length > 0) {
        // При принудительной загрузке сохраняем существующие тесты
        // и добавляем только те, которых нет
        const existingIds = new Set(tests.value.map(test => test.id))
        const newTests = mockTests.filter(test => !existingIds.has(test.id))
        console.log('Принудительная загрузка: существующих тестов:', tests.value.length, 'новых:', newTests.length)
        tests.value = [...tests.value, ...newTests]
      } else {
        console.log('Обычная загрузка тестов:', mockTests.length)
        tests.value = mockTests
      }
      
      initialized.value = true
      console.log('Загрузка завершена. initialized:', initialized.value, 'тестов:', tests.value.length)
      return { success: true, data: tests.value }
    } catch (error: any) {
      console.error('Ошибка загрузки тестов:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка загрузки тестов' 
      }
    } finally {
      loading.value = false
    }
  }

  // Создание теста
  const createTest = async (testData: CreateTestData) => {
    try {
      // Здесь будет вызов API для создания теста
      console.log('Создание теста:', testData)

      // Создаем новый тест с уникальным ID
      const newTest: Test = {
        id: Date.now().toString(),
        title: testData.title,
        description: testData.description,
        category: testData.category,
        status: 'draft',
        questionsCount: testData.questionsCount,
        timeLimit: testData.timeLimit,
        passingScore: testData.passingScore,
        maxScore: testData.maxScore,
        completedCount: 0,
        createdAt: new Date().toISOString()
      }

      // Добавляем тест в список
      tests.value.unshift(newTest)
      
      console.log('Тест создан и добавлен в список:', newTest)
      console.log('Текущее количество тестов:', tests.value.length)
      console.log('Состояние initialized:', initialized.value)
      console.log('Все тесты:', tests.value.map(t => ({ id: t.id, title: t.title })))

      return { success: true, data: newTest }
    } catch (error: any) {
      console.error('Ошибка создания теста:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка создания теста' 
      }
    }
  }

  // Обновление теста
  const updateTest = async (id: string, updates: Partial<Test>) => {
    try {
      // Здесь будет вызов API для обновления теста
      console.log('Обновление теста:', { id, updates })

      const testIndex = tests.value.findIndex(test => test.id === id)
      if (testIndex !== -1) {
        tests.value[testIndex] = { ...tests.value[testIndex], ...updates }
      }

      return { success: true }
    } catch (error: any) {
      console.error('Ошибка обновления теста:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка обновления теста' 
      }
    }
  }

  // Удаление теста
  const deleteTest = async (id: string) => {
    try {
      // Здесь будет вызов API для удаления теста
      console.log('Удаление теста:', id)

      tests.value = tests.value.filter(test => test.id !== id)

      return { success: true }
    } catch (error: any) {
      console.error('Ошибка удаления теста:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка удаления теста' 
      }
    }
  }

  // Получение теста по ID
  const getTestById = (id: string) => {
    return tests.value.find(test => test.id === id)
  }

  // Фильтрация тестов
  const getFilteredTests = (filters: {
    search?: string
    status?: string
    category?: string
  }) => {
    let filtered = tests.value

    if (filters.search) {
      filtered = filtered.filter(test => 
        test.title.toLowerCase().includes(filters.search!.toLowerCase())
      )
    }

    if (filters.status) {
      filtered = filtered.filter(test => test.status === filters.status)
    }

    if (filters.category) {
      filtered = filtered.filter(test => test.category === filters.category)
    }

    return filtered
  }

  // Получение статистики
  const getStats = () => {
    const total = tests.value.length
    const active = tests.value.filter(test => test.status === 'active').length
    const draft = tests.value.filter(test => test.status === 'draft').length
    const totalQuestions = tests.value.reduce((sum, test) => sum + test.questionsCount, 0)
    const totalCompleted = tests.value.reduce((sum, test) => sum + (test.completedCount || 0), 0)

    return {
      total,
      active,
      draft,
      totalQuestions,
      totalCompleted
    }
  }

  // Принудительное обновление тестов
  const refreshTests = async () => {
    return await loadTests(true)
  }

  return {
    tests: readonly(tests),
    loading: readonly(loading),
    loadTests,
    refreshTests,
    createTest,
    updateTest,
    deleteTest,
    getTestById,
    getFilteredTests,
    getStats
  }
} 