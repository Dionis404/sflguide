# Настройка превью ссылок в социальных сетях (SEO)

## Обзор

Система SEO для сайта sflguide.fun теперь полностью настроена и позволяет централизованно управлять мета-тегами для социальных сетей. При публикации ссылок в соцсетях (VK, Telegram, Twitter/X, Facebook и др.) будет отображаться красивое превью с заголовком, описанием и изображением.

## Что было исправлено

✅ **Исправлен синтаксис мета-тегов** - убраны ошибки в синтаксисе Open Graph тегов
✅ **Добавлены Twitter Card мета-теги** - улучшена поддержка Twitter/X
✅ **Добавлен og:url мета-тег** - корректное отображение URL в превью
✅ **Создан централизованный конфиг** - управление SEO из одного файла
✅ **Автоматическая генерация мета-тегов** - система сама создает все необходимые теги

## Как редактировать превью

### 1. Основные настройки сайта

Откройте файл `seo.config.js` в корне проекта:

```javascript
export const seoConfig = {
  site: {
    name: 'Goblin Guides',           // Название сайта
    url: 'https://sflguide.fun',     // URL сайта
    description: 'Гайды по игре...', // Основное описание
    keywords: 'Sunflower Land,...',  // Ключевые слова
    author: 'Goblin Guides'          // Автор
  }
}
```

### 2. Настройки по умолчанию для разных страниц

В том же файле `seo.config.js` можно настроить значения по умолчанию:

```javascript
defaults: {
  home: {
    title: 'Goblin Guides - Гайды по Sunflower Land',
    description: 'Гайды по игре Sunflower Land...',
    image: '/image/GoblinGuides.png'
  },
  guides: {
    title: 'Гайды по Sunflower Land',
    description: 'Подробные гайды...',
    image: '/image/GoblinGuides.png'
  }
}
```

### 3. Настройки социальных сетей

```javascript
social: {
  twitter: {
    card: 'summary_large_image',    // Тип превью
    site: '@goblin_guides',          // Ваш Twitter аккаунт
    creator: '@goblin_guides'        // Аккаунт автора
  }
}
```

## Индивидуальные настройки для страниц

### Для Markdown страниц

В frontmatter страницы добавьте:

```yaml
---
layout: layouts/GuidesLayout.astro
title: "Ваше название страницы"
description: "Индивидуальное описание для этой страницы"
image: "/image/special-image.png"  # Опционально
---
```

### Для Astro страниц

В frontmatter добавьте props:

```javascript
---
const customMeta = {
  title: "Специальный заголовок",
  description: "Специальное описание",
  image: "/image/custom.png"
};
---

<Layout title={customMeta.title} meta={customMeta}>
```

## Изображения для превью

### Рекомендации по изображениям

- **Размер**: Минимум 1200x630 пикселей (рекомендуется 1200x675)
- **Формат**: JPG или PNG
- **Вес**: Не более 5MB
- **Содержание**: Четкое изображение с текстом или логотипом

### Добавление новых изображений

1. Поместите изображение в папку `public/image/`
2. Обновите путь в `seo.config.js`:

```javascript
images: {
  default: '/image/GoblinGuides.png',
  guide: '/image/guide.webp',
  special: '/image/special-image.png'  // Новое изображение
}
```

## Тестирование превью

### Онлайн-инструменты для проверки

1. **Open Graph Checker**: https://opengraph.xyz/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Facebook Debugger**: https://developers.facebook.com/tools/debug/

### Локальное тестирование

1. Запустите проект: `npm run dev`
2. Откройте страницу в браузере
3. Используйте расширение браузера для проверки мета-тегов

## Структура файлов

```
/
├── seo.config.js           # Централизованный конфиг SEO
├── src/
│   ├── layouts/
│   │   ├── HomeLayout.astro     # Layout главной страницы
│   │   ├── GuidesLayout.astro   # Layout страниц гайдов
│   │   └── BlogLayout.astro     # Layout блога
│   └── pages/               # Страницы сайта
└── public/
    └── image/               # Изображения для превью
```

## Советы по оптимизации

### Для лучшего превью в VK
- Используйте яркие изображения
- Короткие, но информативные описания
- Уникальные изображения для разных страниц

### Для Twitter/X
- Используйте `summary_large_image` для больших изображений
- Установите корректные `twitter:site` и `twitter:creator`
- Тестируйте через Twitter Card Validator

### Для Telegram
- Telegram использует Open Graph мета-теги
- Убедитесь, что `og:image` доступен по HTTPS
- Используйте квадратные изображения для лучшего отображения

## Расширенные возможности

### Добавление новых типов страниц

1. Добавьте новый тип в `seo.config.js`:

```javascript
news: {
  title: 'Новости Sunflower Land',
  description: 'Последние новости и обновления...',
  image: '/image/news.png'
}
```

2. Создайте соответствующий layout файл
3. Используйте: `generateMetaTags('news', { title: 'Заголовок' })`

### Кастомные мета-теги

Для специфических нужд можно добавить дополнительные мета-теги:

```javascript
// В layout файле
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#007bff" />
```

## Поддержка

Если у вас возникли вопросы по настройке SEO или превью ссылок, проверьте:

1. Корректность синтаксиса в `seo.config.js`
2. Доступность изображений по указанным путям
3. Правильность URL в `astro.config.mjs`
4. Валидность HTML на страницах

## Результат

После настройки при публикации ссылки на sflguide.fun в социальных сетях будет отображаться:

- 🎯 **Заголовок**: Настраиваемый для каждой страницы
- 📝 **Описание**: Информативное описание контента
- 🖼️ **Изображение**: Привлекательная картинка
- 🔗 **URL**: Корректная ссылка на страницу
- 👤 **Автор**: Указание автора контента

Теперь вы можете легко управлять тем, как выглядят ваши ссылки в социальных сетях! 🚀