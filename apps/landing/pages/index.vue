<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Навигация -->
    <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <UContainer class="py-4">
        <nav class="flex items-center justify-between">
          <!-- Логотип -->
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-cpu-chip" class="w-8 h-8 text-blue-600" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              HardCheck
            </span>
          </div>
          
          <!-- Навигационное меню -->
          <div class="hidden md:flex items-center space-x-6">
            <UButton variant="ghost" size="sm">Решения</UButton>
            <UButton variant="ghost" size="sm">Продукты</UButton>
            <UButton variant="ghost" size="sm">Цены</UButton>
            <UButton variant="ghost" size="sm">О нас</UButton>
          </div>
          
          <!-- Кнопки действий -->
          <div class="flex items-center space-x-3">
            <UButton variant="ghost" size="sm">Войти</UButton>
            <UButton size="sm">
              Запросить демо
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
            Платформа на базе ИИ для оценки IT-кадров
          </UBadge>
          
          <!-- Заголовок -->
          <h1 class="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Найдите и оцените
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              IT-таланты
            </span>
            нового поколения
          </h1>
          
          <!-- Описание -->
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Революционная платформа для технического скрининга разработчиков с использованием ИИ. 
            Проводите точную оценку навыков за минуты, а не часы.
          </p>
          
          <!-- Кнопки действий -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <UButton size="xl" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
              Начать тестирование
            </UButton>
            <UButton variant="outline" size="xl" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
              Посмотреть демо
            </UButton>
          </div>
          
          <!-- Статистика -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Компаний используют</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Точность оценки</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">50K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Разработчиков протестировано</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Секция решений -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Комплексные решения для оценки IT-талантов
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            От быстрого скрининга до глубокой технической диагностики - все инструменты в одной платформе
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Экспресс-скрининг -->
          <UCard class="p-6 hover:shadow-lg transition-shadow border-2 border-blue-200 dark:border-blue-800">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-bolt" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Экспресс-скрининг
                </h3>
                <span class="text-sm text-blue-600 font-medium">15 минут</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Быстрая оценка базовых навыков для отсеивания неподходящих кандидатов на раннем этапе
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              <li>• Основы программирования</li>
              <li>• Логическое мышление</li>
              <li>• Знание синтаксиса</li>
            </ul>
            <UButton variant="soft" size="sm" class="w-full">
              Подробнее
            </UButton>
          </UCard>
          
          <!-- Технический скрининг -->
          <UCard class="p-6 hover:shadow-lg transition-shadow border-2 border-green-200 dark:border-green-800">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Технический скрининг
                </h3>
                <span class="text-sm text-green-600 font-medium">40-60 минут</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Эквивалент трёхчасового интервью с экспертом. Оценка практических навыков решения задач
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              <li>• Алгоритмы и структуры данных</li>
              <li>• Архитектурные решения</li>
              <li>• Code review реальных проектов</li>
            </ul>
            <UButton variant="soft" size="sm" color="green" class="w-full">
              Подробнее
            </UButton>
          </UCard>
          
          <!-- Глубокая диагностика -->
          <UCard class="p-6 hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-800">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <UIcon name="i-heroicons-chart-bar-square" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Глубокая диагностика
                </h3>
                <span class="text-sm text-purple-600 font-medium">2-4 часа</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Полная техническая диагностика с составлением детальной карты навыков и компетенций
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
              <li>• Карта компетенций</li>
              <li>• Архитектурное мышление</li>
              <li>• Лидерские качества</li>
            </ul>
            <UButton variant="soft" size="sm" color="purple" class="w-full">
              Подробнее
            </UButton>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Секция преимуществ ИИ -->
    <section class="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="blue" variant="subtle" class="mb-4">
              <UIcon name="i-heroicons-cpu-chip" class="w-4 h-4 mr-2" />
              Искусственный интеллект
            </UBadge>
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ИИ анализирует каждый аспект кода
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Наша нейросеть обучена на миллионах строк кода от senior-разработчиков 
              и способна выявлять глубокие паттерны мышления кандидатов
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Анализ качества кода</h4>
                  <p class="text-gray-600 dark:text-gray-300">Оценка читаемости, производительности и следования best practices</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Архитектурное мышление</h4>
                  <p class="text-gray-600 dark:text-gray-300">Понимание принципов проектирования и способность к масштабированию</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Выявление потенциала</h4>
                  <p class="text-gray-600 dark:text-gray-300">Определение скрытых способностей и точек роста</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <!-- Визуальное представление ИИ анализа -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white">Анализ кода в реальном времени</h4>
                <UBadge color="green" variant="soft">Активен</UBadge>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Качество кода</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
                    </div>
                    <span class="text-sm font-medium text-green-600">85%</span>
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Архитектура</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: 78%"></div>
                    </div>
                    <span class="text-sm font-medium text-blue-600">78%</span>
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Алгоритмы</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div class="bg-purple-500 h-2 rounded-full" style="width: 92%"></div>
                    </div>
                    <span class="text-sm font-medium text-purple-600">92%</span>
                  </div>
                </div>
              </div>
              
              <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p class="text-sm text-blue-800 dark:text-blue-200">
                  <UIcon name="i-heroicons-lightbulb" class="w-4 h-4 mr-1 inline" />
                  ИИ рекомендует: Кандидат показал strong senior навыки в алгоритмах. 
                  Рекомендуется для позиции Senior Backend Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Секция для HR и техлидов -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Решения для каждой роли
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Инструменты, адаптированные под потребности HR-специалистов, техлидов и самих разработчиков
          </p>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Для HR -->
          <UCard class="p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-users" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Для HR и рекрутеров
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Ускорьте процесс найма в 2-3 раза без привлечения технических экспертов
            </p>
            <ul class="text-left space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Автоматический отсев неподходящих кандидатов
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Готовые отчёты для принятия решений
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Интеграция с ATS системами
              </li>
            </ul>
            <UButton color="blue" class="w-full">
              Попробовать бесплатно
            </UButton>
          </UCard>
          
          <!-- Для техлидов -->
          <UCard class="p-8 text-center hover:shadow-lg transition-shadow border-2 border-blue-200 dark:border-blue-800">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Для CTO и техлидов
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Получите точную карту навыков команды и оптимизируйте распределение задач
            </p>
            <ul class="text-left space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Карта компетенций всей команды
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Определение точек роста
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Планы развития сотрудников
              </li>
            </ul>
            <UButton color="green" class="w-full">
              Запросить демо
            </UButton>
          </UCard>
          
          <!-- Для разработчиков -->
          <UCard class="p-8 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-code-bracket" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Для разработчиков
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Определите свой уровень, получите персональный план развития и сертификацию
            </p>
            <ul class="text-left space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Объективная оценка навыков
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Персональные рекомендации
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Сертификаты компетенций
              </li>
            </ul>
            <UButton color="purple" class="w-full">
              Пройти тест
            </UButton>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Секция отзывов -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Что говорят наши клиенты
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Компании по всей России уже используют HardCheck для поиска IT-талантов
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                А
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Алексей Петров</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">CTO, TechStart</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">
              "HardCheck помог нам сократить время найма с 2 месяцев до 3 недель. 
              Качество кандидатов значительно выросло."
            </p>
            <div class="flex mt-3">
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
            </div>
          </UCard>
          
          <UCard class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                М
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Мария Сидорова</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Head of HR, InnovaIT</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">
              "Наконец-то HR может проводить технические интервью без привлечения разработчиков. 
              Экономия времени команды огромная!"
            </p>
            <div class="flex mt-3">
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
            </div>
          </UCard>
          
          <UCard class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                Д
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Дмитрий Козлов</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Senior Developer, CodeForge</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">
              "Прошёл диагностику и получил детальную карту своих навыков. 
              Понял, на что обратить внимание для роста до архитектора."
            </p>
            <div class="flex mt-3">
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA секция -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-white mb-6">
            Готовы революционизировать процесс найма?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Присоединяйтесь к сотням компаний, которые уже используют ИИ для поиска лучших IT-талантов
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="white" class="px-8 py-4 text-lg">
              <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 mr-2" />
              Начать бесплатный период
            </UButton>
            <UButton variant="outline" size="xl" color="white" class="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              Связаться с нами
            </UButton>
          </div>
          
          <p class="text-blue-100 text-sm mt-4">
            Бесплатный период 14 дней • Без привязки карты • Поддержка 24/7
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Футер -->
    <footer class="bg-gray-900 text-white py-16">
      <UContainer>
        <div class="grid md:grid-cols-4 gap-8">
          <!-- О компании -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6 text-blue-400" />
              <span class="text-lg font-bold">HardCheck</span>
            </div>
            <p class="text-gray-400 mb-4">
              Революционная платформа для оценки IT-кадров с использованием искусственного интеллекта
            </p>
            <div class="flex space-x-4">
              <UButton variant="ghost" size="sm" square>
                <UIcon name="i-simple-icons-telegram" class="w-5 h-5" />
              </UButton>
              <UButton variant="ghost" size="sm" square>
                <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
              </UButton>
              <UButton variant="ghost" size="sm" square>
                <UIcon name="i-simple-icons-github" class="w-5 h-5" />
              </UButton>
            </div>
          </div>
          
          <!-- Продукты -->
          <div>
            <h4 class="font-semibold mb-4">Продукты</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Экспресс-скрининг</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Технический скрининг</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Глубокая диагностика</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API для интеграций</a></li>
            </ul>
          </div>
          
          <!-- Решения -->
          <div>
            <h4 class="font-semibold mb-4">Решения</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Для HR-команд</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Для техлидов</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Для разработчиков</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Корпоративные решения</a></li>
            </ul>
          </div>
          
          <!-- Поддержка -->
          <div>
            <h4 class="font-semibold mb-4">Поддержка</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Центр помощи</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Связаться с нами</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Статус системы</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2025 HardCheck. Все права защищены.
          </p>
          <div class="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" class="hover:text-white transition-colors">Условия использования</a>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
// Мета-теги для SEO
useHead({
  title: 'HardCheck - Платформа оценки IT-кадров с ИИ',
  meta: [
    { 
      name: 'description', 
      content: 'Революционная платформа для технического скрининга разработчиков с использованием ИИ. Проводите точную оценку навыков за минуты, а не часы.' 
    },
    { 
      name: 'keywords', 
      content: 'оценка IT кадров, технический скрининг, тестирование разработчиков, ИИ рекрутинг, HardCheck' 
    },
    { property: 'og:title', content: 'HardCheck - Платформа оценки IT-кадров с ИИ' },
    { 
      property: 'og:description', 
      content: 'Революционная платформа для технического скрининга разработчиков с использованием ИИ.' 
    },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
