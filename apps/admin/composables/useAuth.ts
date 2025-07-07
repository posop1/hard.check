// Composable для работы с аутентификацией
export const useAuth = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase || 'http://localhost:5003'

  // Типы
  interface User {
    id: string
    email: string
    name: string
  }

  interface LoginResponse {
    token: string
    organizationId: string
    email: string
    name: string
  }

  interface RegisterResponse {
    organizationId: string
    name: string
    email: string
    token: string
  }

  // Состояние аутентификации
  const user = useState<User | null>('user', () => null)
  const token = useState<string | null>('token', () => null)
  const isAuthenticated = computed(() => !!token.value)

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
      if (token.value) {
        options.headers = {
          ...options.headers,
          'Authorization': `Bearer ${token.value}`
        } as any
      }
    }
  })

  // Вход в систему
  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await api<LoginResponse>('/auth/login', {
        method: 'POST',
        body: credentials
      })

      // Сохраняем данные пользователя и токен
      user.value = {
        id: response.organizationId,
        email: response.email,
        name: response.name
      }
      token.value = response.token

      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('hardcheck_token', response.token)
        localStorage.setItem('hardcheck_user', JSON.stringify(user.value))
      }

      return { success: true, data: response }
    } catch (error: any) {
      console.error('Ошибка входа:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка входа в систему' 
      }
    }
  }

  // Регистрация организации
  const register = async (data: { email: string; password: string; name: string }) => {
    try {
      const response = await api<RegisterResponse>('/auth/register', {
        method: 'POST',
        body: data
      })

      // После успешной регистрации автоматически входим
      user.value = {
        id: response.organizationId,
        email: response.email,
        name: response.name
      }
      token.value = response.token

      // Сохраняем в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('hardcheck_token', response.token)
        localStorage.setItem('hardcheck_user', JSON.stringify(user.value))
      }

      return { success: true, data: response }
    } catch (error: any) {
      console.error('Ошибка регистрации:', error)
      return { 
        success: false, 
        error: error.data?.message || 'Ошибка регистрации' 
      }
    }
  }

  // Выход из системы
  const logout = async () => {
    try {
      if (token.value) {
        await authApi('/auth/logout', {
          method: 'POST'
        })
      }
    } catch (error) {
      console.error('Ошибка выхода:', error)
    } finally {
      // Очищаем данные
      user.value = null
      token.value = null

      if (typeof window !== 'undefined') {
        localStorage.removeItem('hardcheck_token')
        localStorage.removeItem('hardcheck_user')
      }
    }
  }

  // Инициализация состояния из localStorage
  const initAuth = () => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('hardcheck_token')
      const savedUser = localStorage.getItem('hardcheck_user')

      if (savedToken && savedUser) {
        token.value = savedToken
        user.value = JSON.parse(savedUser) as User
      }
    }
  }

  // Проверка токена
  const checkAuth = async () => {
    if (!token.value) return false

    try {
      // Можно добавить эндпоинт для проверки токена
      // await authApi('/auth/verify')
      return true
    } catch (error) {
      // Токен недействителен, очищаем состояние
      await logout()
      return false
    }
  }

  return {
    user: readonly(user),
    token: readonly(token),
    isAuthenticated,
    login,
    register,
    logout,
    initAuth,
    checkAuth,
    api: authApi
  }
} 