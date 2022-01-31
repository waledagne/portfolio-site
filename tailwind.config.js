const { secondary } = require("daisyui/colors/colorNames");

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
      mytheme:{
        primary: '#2a9d8f',
        'primary-focus': '#264653',
        'primary-content': '#ffffff',
        secondary: '#F2B200',
        'secondary-focus': '#c28e00',
        'secondary-content': '#ffffff',
        accent: '#009169',
        'accent-focus': '#005542',
        'accent-content': '#ffffff',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins:[require('daisyui')],
}
