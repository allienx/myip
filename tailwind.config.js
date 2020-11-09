const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [],
  purge: {
    content: ['./src/index.html', './src/**/*.svelte'],
    options: {
      whitelist: [/svelte-/],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
}
