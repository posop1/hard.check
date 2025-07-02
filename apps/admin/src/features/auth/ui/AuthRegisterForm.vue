<template>
  <div>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
      Создать аккаунт
    </h2>
    
    <form class="space-y-4" @submit.prevent="handleSubmit" >
      <!-- Email -->
      <div class="flex flex-col">
        <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <UInput
          v-model="form.email"
          type="email"
          placeholder="example@company.com"
          size="xl"
          required
          :disabled="props.loading"
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
          v-model="form.organization"
          type="text"
          placeholder="Название компании"
          size="xl"
          required
          :disabled="props.loading"
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
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Минимум 8 символов"
          size="xl"
          required
          :disabled="props.loading"
        >
          <template #leading>
            <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-gray-400" />
          </template>
          <template #trailing>
            <UButton
              variant="ghost"
              size="xs"
              :disabled="props.loading"
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
          v-model="form.confirmPassword"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Повторите пароль"
          size="xl"
          required
          :disabled="props.loading"
        >
          <template #leading>
            <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 text-gray-400" />
          </template>
        </UInput>
        <!-- Ошибка несовпадения паролей -->
        <p 
          v-if="form.password && form.confirmPassword && form.password !== form.confirmPassword"
          class="text-red-500 text-xs mt-1"
        >
          Пароли не совпадают
        </p>
      </div>

      <!-- Согласие с условиями -->
      <div class="flex items-start space-x-3">
        <UCheckbox
          v-model="form.agreeToTerms"
          required
          :disabled="props.loading"
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
        :loading="props.loading"
        :disabled="!isFormValid"
      >
        <UIcon name="i-heroicons-user-plus" class="w-4 h-4 mr-2" />
        Создать аккаунт
      </UButton>
    </form>
  </div>
</template>

<script setup lang="ts">
interface RegisterData {
  email: string
  organization: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

const emit = defineEmits<{
  submit: [data: RegisterData]
  success: []
}>()

// Реактивные данные
const showPassword = ref(false)
const form = reactive<RegisterData>({
  email: '',
  organization: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

// Валидация формы
const isFormValid = computed(() => {
  return (
    form.email &&
    form.organization &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword &&
    form.password.length >= 8 &&
    form.agreeToTerms
  )
})

// Обработчик отправки формы
const handleSubmit = () => {
  if (isFormValid.value) {
    emit('submit', { ...form })
  }
}

// Сброс формы после успешной регистрации
const resetForm = () => {
  Object.assign(form, {
    email: '',
    organization: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })
  emit('success')
}

// Экспортируем метод сброса формы
defineExpose({
  resetForm
})
</script> 