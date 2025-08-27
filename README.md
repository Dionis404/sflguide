# Goblin Guides - Гайды по Sunflower Land

Проект с гайдами по игре Sunflower Land с пиксель-арт оформлением.

## 🚀 О проекте

Этот сайт содержит:
- Гайды по основным механикам игры
- Лайфхаки и советы
- Информацию о фракциях, монетах и других аспектах
- Блог с новостями и обновлениями

## 🛠 Технологии

- **Astro** - статический генератор сайтов
- **TypeScript** - типизированный JavaScript
- **CSS** - пиксель-арт стилизация

## 📁 Структура проекта

```
/
├── public/
│   ├── background/
│   ├── borders/
│   ├── button/
│   ├── icon/
│   └── image/
├── src/
│   ├── components/
│   │   ├── Welcome.astro
│   │   ├── ContentNavigation.astro
│   │   ├── CollapsibleSidebar.astro
│   │   └── TableOfContents.astro
│   ├── layouts/
│   │   ├── HomeLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── GuidesLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   └── guides/
│   └── styles/
│       └── main.css
└── package.json
```

## 🧞 Команды

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Установка зависимостей                           |
| `npm run dev`             | Запуск сервера разработки на `localhost:4321`    |
| `npm run build`           | Сборка проекта в `./dist/`                       |
| `npm run preview`         | Предпросмотр сборки                             |
| `npm run astro ...`       | Команды Astro CLI                                |

## 🎨 Дизайн

Сайт оформлен в пиксель-арт стиле с использованием:
- Кастомных границ и кнопок
- Фон с повторяющимся изображением
- Шрифт Press Start 2P
- Адаптивный дизайн для мобильных устройств

## 📝 Разделы

- **Главная** - приветственная страница с навигацией
- **Гайды** - основные руководства по игре
- **Блог** - новости и обновления
- **База данных** - справочная информация
- **Полезные ссылки** - внешние ресурсы

## 👀 Дополнительно

- [Документация Astro](https://docs.astro.build)
- [Sunflower Land](https://sunflower-land.com)
