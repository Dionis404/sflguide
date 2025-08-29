// Конфигурация SEO и мета-тегов для социальных сетей
// Этот файл позволяет централизованно управлять всеми SEO настройками

export const seoConfig = {
  // Основные настройки сайта
  site: {
    name: 'Goblin Guides',
    url: 'https://sflguide.fun',
    description: 'Гайды по игре Sunflower Land - фракции, монеты, лайфхаки и полезные советы',
    keywords: 'Sunflower Land, гайды, фракции, монеты, лайфхаки, Stardew Valley',
    author: 'Goblin Guides',
    language: 'ru'
  },

  // Настройки изображений для превью
  images: {
    default: '/image/GoblinGuides.png',
    guide: '/image/guide.webp',
    // Можно добавить больше изображений для разных типов страниц
  },

  // Настройки по умолчанию для разных типов страниц
  defaults: {
    home: {
      title: 'Goblin Guides - Гайды по Sunflower Land',
      description: 'Гайды по игре Sunflower Land - фракции, монеты, лайфхаки и полезные советы для игроков',
      image: '/image/GoblinGuides.png'
    },

    guides: {
      title: 'Гайды по Sunflower Land',
      description: 'Подробные гайды по игре Sunflower Land - фракции, монеты, лайфхаки и стратегии',
      image: '/image/GoblinGuides.png'
    },

    blog: {
      title: 'Блог Goblin Guides',
      description: 'Блог и полезная информация по игре Sunflower Land',
      image: '/image/GoblinGuides.png'
    }
  },

  // Настройки социальных сетей
  social: {
    twitter: {
      card: 'summary_large_image',
      site: '@goblin_guides', // замените на ваш Twitter аккаунт
      creator: '@goblin_guides' // замените на ваш Twitter аккаунт
    },

    // Дополнительные настройки для других платформ
    vk: {
      // Настройки для VK
    },

    telegram: {
      // Настройки для Telegram
    }
  }
};

// Функция для генерации мета-тегов
export function generateMetaTags(pageType = 'home', customData = {}) {
  const config = seoConfig.defaults[pageType] || seoConfig.defaults.home;

  return {
    title: customData.title || config.title,
    description: customData.description || config.description,
    image: customData.image || config.image,
    url: customData.url || seoConfig.site.url,
    type: customData.type || 'website',
    siteName: seoConfig.site.name
  };
}

// Функция для генерации Open Graph мета-тегов
export function generateOpenGraphTags(metaTags) {
  return {
    'og:title': metaTags.title,
    'og:description': metaTags.description,
    'og:image': metaTags.image,
    'og:url': metaTags.url,
    'og:type': metaTags.type,
    'og:site_name': metaTags.siteName
  };
}

// Функция для генерации Twitter Card мета-тегов
export function generateTwitterTags(metaTags) {
  return {
    'twitter:card': seoConfig.social.twitter.card,
    'twitter:title': metaTags.title,
    'twitter:description': metaTags.description,
    'twitter:image': metaTags.image,
    'twitter:site': seoConfig.social.twitter.site,
    'twitter:creator': seoConfig.social.twitter.creator
  };
}