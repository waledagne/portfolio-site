module.exports = {
  purge: ["./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        black:"#0a192f"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
