module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  extend: {
    backgroundImage: {
      "hero-img": "url('/images/hero-img.svg')",
    },
    boxShadow: {
      "custom-subtle": "0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.8)",
    },
  },
  theme: {
    colors: {
      burgundy: "#4C1506",
    },
    fontFamily: {
      body: ['"Hind Vadodara"'],
      inter: ["inter"],
    },
  },
  plugins: [],
};
