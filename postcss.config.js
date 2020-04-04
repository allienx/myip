const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/index.html', './src/**/*.svelte'],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],

  whitelistPatterns: [/svelte-/],
})

const prod = process.env.NODE_ENV === 'production'
const plugins = prod ? [purgecss] : []

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), ...plugins],
}
