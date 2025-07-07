<template>
  <div>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
      Войти в систему
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

      <!-- Пароль -->
      <div class="flex flex-col">
        <label class="flex w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Пароль
        </label>
        <UInput
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Введите пароль"
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

      <!-- Кнопка входа -->
      <UButton
        type="submit"
        block
        size="lg"
        :loading="props.loading"
        :disabled="!form.email || !form.password"
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
</template>

<script setup lang="ts">
interface LoginData {
  email: string
  password: string
}

interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

const emit = defineEmits<{
  submit: [data: LoginData]
}>()

// Реактивные данные
const showPassword = ref(false)
const form = reactive<LoginData>({
  email: '',
  password: ''
})

// Обработчик отправки формы
const handleSubmit = () => {
  emit('submit', { ...form })
}
</script> 