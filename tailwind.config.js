module.exports = {
  plugins: [],
  purge: {
    content: ['./src/index.html', './src/**/*.svelte'],
    options: {
      whitelist: [/svelte-/],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
}
