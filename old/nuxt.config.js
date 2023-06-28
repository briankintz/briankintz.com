export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  target: 'static',
  head: {
    title: 'Brian Kintz',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'DevOps engineer and cloud architect with experience designing and building scalable cloud-native applications and systems.',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  components: true,
  css: ['~/assets/css/tailwind'],
  modules: ['@nuxtjs/sentry'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    'nuxt-lazysizes',
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-hexrgba': {},
        'postcss-responsive-type': {},
      },
    },
  },

  plugins: ['~/plugins/aos.client.js'],

  env: {
    buildDate: new Date(),
    gitCommitSha: process.env.COMMIT_REF || 'unknown',
    gitCommitShaShort: (process.env.COMMIT_REF || 'unknown').substring(0, 8),
  },

  fontawesome: {
    icons: {
      brands: ['faInstagram', 'faGithub', 'faLinkedin'],
    },
    proIcons: {
      light: [
        'faAnchor',
        'faBadgeCheck',
        'faBrainCircuit',
        'faBullseyeArrow',
        'faBurgerCheese',
        'faCircleHeart',
        'faCloud',
        'faElephant',
        'faGuitars',
        'faMountain',
        'faNetworkWired',
        'faPersonSkiing',
        'faStar',
        'faUserBountyHunter',
        'faUserRobot',
      ],
      solid: ['faHeart'],
    },
  },

  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset', 'data-lowsrc'],
      source: ['src', 'srcset', 'data-src', 'data-srcset', 'data-lowsrc'],
    },
  },

  sentry: {
    dsn: 'https://a4901f39c5704c5a8edad131692a1192@o345407.ingest.sentry.io/5675152',
    publishRelease: true,
  },

  tailwindcss: {
    jit: true,
  },
}
