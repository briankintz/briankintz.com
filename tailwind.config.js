const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        DEFAULT: 'rgb(var(--bk-dark-default))',
        darker: 'rgb(var(--bk-dark-darker))',
        lighter: 'rgb(var(--bk-dark-lighter))',
      },
      light: {
        DEFAULT: 'rgb(var(--bk-light-default))',
        darker: 'rgb(var(--bk-light-darker))',
        white: 'rgb(var(--bk-light-white))',
      },
      accent: {
        blue: 'rgb(var(--bk-accent-blue))',
        green: 'rgb(var(--bk-accent-green))',
        magenta: 'rgb(var(--bk-accent-magenta))',
        orange: 'rgb(var(--bk-accent-orange))',
        purple: 'rgb(var(--bk-accent-purple))',
        red: 'rgb(var(--bk-accent-red))',
        teal: 'rgb(var(--bk-accent-teal))',
        yellow: 'rgb(var(--bk-accent-yellow))',
      },
    },
    boxShadow: {
      DEFAULT: 'var(--bk-shadow)',
    },
    fontFamily: {
      sans: ['t26-carbon', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: false,
}
