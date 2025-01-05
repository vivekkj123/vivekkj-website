/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-card': 'rgba(255, 255, 255, 0.05)',
        'glass-stroke': 'rgba(255, 255, 255, 0.15)',
        'primary-fg': '#165bdc',
        'primary-bg': '#0A0A0B',
        'secondary-bg': 'rgba(255, 255, 255, 0.03)',
        'code-bg': 'rgba(71, 85, 105, 0.8)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
