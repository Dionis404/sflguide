# Шаблоны для гайдов Sunflower Land

## 🎨 **Система дизайна гайдов**

### Компоненты для использования:

#### 1. Акцентный текст
```html
<span class="accent-text">важный текст</span>
```

#### 2. Блок подсветки
```html
<div class="highlight-box">
  <div class="highlight-header">
    <span class="highlight-icon">💡</span>
    <strong class="highlight-title">Заголовок блока</strong>
  </div>
  <div class="highlight-content">
    <p>Содержимое блока</p>
  </div>
</div>
```

#### 3. Блок предупреждения
```html
<div class="warning-box">
  <div class="warning-header">
    <span class="warning-icon">⚠️</span>
    <strong class="warning-title">Важно!</strong>
  </div>
  <div class="warning-content">
    <p>Содержимое предупреждения</p>
  </div>
</div>
```

#### 4. Изображение с подписью
```html
<div class="guide-image-wrapper">
  <img src="/image/example.png" alt="Описание" class="guide-image">
  <div class="guide-caption">Подпись к изображению</div>
</div>
```

## 📝 **Шаблон нового гайда**

```markdown
---
layout: layouts/GuidesLayout.astro
title: "Название гайда"
description: "Описание для SEO"
image: "/image/guide.webp"
keywords: "ключевые, слова, для, поиска"
index: 1
---

<div class="highlight-box">
  <div class="highlight-header">
    <span class="highlight-icon">🎯</span>
    <strong class="highlight-title">Введение</strong>
  </div>
  <div class="highlight-content">
    <p>Вводный текст о теме гайда</p>
  </div>
</div>

## Основной контент

<div class="guide-image-wrapper">
  <img src="/image/example.png" alt="Пример" class="guide-image">
  <div class="guide-caption">Подпись к изображению</div>
</div>

<div class="warning-box">
  <div class="warning-header">
    <span class="warning-icon">⚠️</span>
    <strong class="warning-title">Важное замечание</strong>
  </div>
  <div class="warning-content">
    <p>Важная информация для пользователей</p>
  </div>
</div>
```

## 🎨 **Цветовая схема**

- **Основной цвет:** `#c28569` (коричневый)
- **Акцентный цвет:** `#daa520` (золотой)
- **Фон подсветки:** `rgba(255,255,255,0.1)`
- **Цвет текста:** `#000000`

## 📱 **Адаптивность**

Все компоненты автоматически адаптируются под мобильные устройства с помощью CSS медиа-запросов.

## 🚀 **Использование**

1. Скопируйте нужный компонент
2. Вставьте в свой гайд
3. Настройте содержимое под свою тему
4. Проверьте отображение на разных устройствах