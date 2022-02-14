const { secondary } = require("daisyui/colors/colorNames");

module.exports = {
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#0a192f",
        blueblack:"#114775",
      },

      mytheme: {
        primary: "#2a9d8f",
        "primary-focus": "#264653",
        "primary-content": "#ffffff",
        secondary: "#F2B200",
        "secondary-focus": "#c28e00",
        "secondary-content": "#ffffff",
        accent: "#64ffda",
        "accent-focus": "#005542",
        "accent-content": "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
