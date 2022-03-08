const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "elden-ring-dark-blue": "#0c2527",
      "elden-ring-dark-green": "#14302d",
      "elden-ring-green": "#3a5950",
      "elden-ring-light-green": "#3a5950",
      "elden-ring-gold": "#c39e66",
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
  ],
};
