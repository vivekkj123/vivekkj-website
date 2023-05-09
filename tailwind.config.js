/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-fg": "#FEF303",
        "primary-bg": "#0A091B",
        "secondary-bg": "#22213A",
      },
      gridTemplateColumns: {
        "hero-grid": "0.1fr 2fr 1fr",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
};
