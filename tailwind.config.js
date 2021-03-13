const colors = require('tailwindcss/colors')
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
      gray: colors.blueGray,
      blue: {
        light: '#5bc0eb',
        DEFAULT: '#1d3249',
        dark: '#102134',
      },
      orange: '#ff6d00',
    },
    fontFamily: {
      sans: ['Abel', ...defaultTheme.fontFamily.sans],
      brand: ['anuratiblankak'],
    },
  },
  darkMode: false,
}
