<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Навигация -->
    <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <UContainer class="py-4">
        <nav class="flex items-center justify-between">
          <!-- Логотип -->
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-blue-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              HardCheck
            </span>
          </div>
          
          <!-- Навигационное меню -->
          <div class="hidden md:flex items-center space-x-6">
            <UButton variant="ghost" size="sm">Возможности</UButton>
            <UButton variant="ghost" size="sm">Цены</UButton>
            <UButton variant="ghost" size="sm">Документация</UButton>
            <UButton variant="ghost" size="sm">О нас</UButton>
          </div>
          
          <!-- Кнопки действий -->
          <div class="flex items-center space-x-3">
            <UButton variant="ghost" size="sm">Войти</UButton>
            <UButton size="sm">
              Начать бесплатно
            </UButton>
          </div>
        </nav>
      </UContainer>
    </header>

    <!-- Главная секция -->
    <section class="py-20 lg:py-32">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <!-- Бейдж -->
          <UBadge 
            color="blue" 
            variant="subtle" 
            size="lg" 
            class="mb-6 inline-flex"
          >
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4 mr-2" />
            Новая версия 3.0 уже доступна!
          </UBadge>
          
          <!-- Заголовок -->
          <h1 class="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Система контроля
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              качества
            </span>
            нового поколения
          </h1>
          
          <!-- Описание -->
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Автоматизируйте процессы проверки, анализа и контроля качества в ваших проектах. 
            Современная платформа для команд, которые ценят надёжность и скорость.
          </p>
          
          <!-- Кнопки действий -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <UButton size="xl" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
              Начать работу
            </UButton>
            <UButton variant="outline" size="xl" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
              Посмотреть демо
            </UButton>
          </div>
          
          <!-- Статистика -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Компаний доверяют</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Время работы</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">50M+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Проверок выполнено</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Секция возможностей -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Мощные возможности для вашей команды
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Все инструменты, необходимые для эффективного управления качеством в одной платформе
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Карточка 1 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Автоматическая проверка
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Настройте автоматические проверки качества кода, соответствия стандартам и безопасности
            </p>
            <UButton variant="soft" size="sm">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
          
          <!-- Карточка 2 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-chart-bar-square" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Аналитика и отчёты
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Получайте детальные отчёты, метрики и insights для принятия обоснованных решений
            </p>
            <UButton variant="soft" size="sm" color="green">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
          
          <!-- Карточка 3 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-users" class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Командная работа
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Организуйте эффективную совместную работу команды с инструментами коллаборации
            </p>
            <UButton variant="soft" size="sm" color="purple">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
          
          <!-- Карточка 4 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-bolt" class="w-6 h-6 text-orange-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Быстрое развёртывание
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Запустите систему контроля качества за минуты с готовыми шаблонами и интеграциями
            </p>
            <UButton variant="soft" size="sm" color="orange">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
          
          <!-- Карточка 5 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-bug-ant" class="w-6 h-6 text-red-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Обнаружение проблем
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Автоматическое выявление багов, уязвимостей и нарушений стандартов кодирования
            </p>
            <UButton variant="soft" size="sm" color="red">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
          
          <!-- Карточка 6 -->
          <UCard class="p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 text-indigo-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Настройка и интеграции
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Гибкая настройка под ваши процессы с интеграцией в популярные инструменты разработки
            </p>
            <UButton variant="soft" size="sm" color="indigo">
              Узнать больше
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </UButton>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA секция -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <UContainer>
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-4">
            Готовы повысить качество ваших проектов?
          </h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам команд, которые уже используют HardCheck 
            для обеспечения качества своих проектов
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="white" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
              Начать бесплатно
            </UButton>
            <UButton variant="outline" size="xl" color="white" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              Связаться с нами
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Футер -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <UContainer>
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-400" />
            <span class="text-xl font-bold text-white">HardCheck</span>
          </div>
          <p class="mb-6">
            © 2025 HardCheck. Все права защищены.
          </p>
          <div class="flex justify-center space-x-6">
            <UButton variant="ghost" size="sm" color="gray">Условия использования</UButton>
            <UButton variant="ghost" size="sm" color="gray">Политика конфиденциальности</UButton>
            <UButton variant="ghost" size="sm" color="gray">Поддержка</UButton>
            <UButton variant="ghost" size="sm" color="gray">API</UButton>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
// SEO мета-теги
useHead({
  title: 'HardCheck - Система контроля качества нового поколения',
  meta: [
    {
      name: 'description',
      content: 'Автоматизируйте процессы проверки, анализа и контроля качества в ваших проектах. Современная платформа для команд, которые ценят надёжность и скорость.'
    },
    {
      name: 'keywords',
      content: 'контроль качества, автоматизация, проверка кода, тестирование, CI/CD, DevOps'
    },
    {
      property: 'og:title',
      content: 'HardCheck - Система контроля качества нового поколения'
    },
    {
      property: 'og:description',
      content: 'Автоматизируйте процессы проверки, анализа и контроля качества в ваших проектах'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
