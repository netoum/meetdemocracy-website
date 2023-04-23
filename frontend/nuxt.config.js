export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meet democracy',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: "https://code.jquery.com/jquery-3.6.0.min.js" },
      { src: 'https://support.meetdemocracy.com/assets/chat/chat.min.js', body: true },
      // {
      //   src: `https://www.googletagmanager.com/gtag/js?id=G-2V5K00VVV0`,
      //   async: true,
      //   defer: true
      // },
      // {
      //   innerHTML: `
      //     window.dataLayer = window.dataLayer || [];
      //     function gtag(){dataLayer.push(arguments);}
      //     gtag('js', new Date());
      //     gtag('config', 'G-2V5K00VVV0');
      //   `
      // }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/zammad-chat.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-2V5K00VVV0'
  },

  // image: {
  //   strapi: {
  //     baseURL: 'https://it7qkyesbfvuustk6819.cleaver.live/uploads/'
  //   }
  // },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  // image: {
  //   formats: {
  //     webp: {
  //       quality: 75
  //     }
  //   }
  // },

  i18n: {
    locales:['en', 'fr'],
    defaultLocale: 'en'
  },

  sitemap: {
    hostname: 'https://meetdemocracy.com',
    gzip: true,
    i18n: true,
    i18n: {
      locales: ['en', 'fr'],
    },
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date()
    }
  },

  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
