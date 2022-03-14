const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "elden-ring-green": {
          0: "#ebfff4",
          50: "#d3f3e2",
          100: "#bce8d1",
          150: "#a7dcc1",
          200: "#93d0b1",
          300: "#71b996",
          400: "#56a17f",
          500: "#418a69",
          600: "#317256",
          700: "#235b43",
          800: "#194331",
          900: "#0f2c20",
          1000: "#07140f",
        },
        "elden-ring-dark-blue": "#0c2527",
        "elden-ring-dark-green": "#14302d",
        "elden-ring-light-green": "#3a5950",
        "elden-ring-gold": "#c39e66",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.6xl") },
        h2: { fontSize: theme("fontSize.5xl") },
        h3: { fontSize: theme("fontSize.4xl") },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
