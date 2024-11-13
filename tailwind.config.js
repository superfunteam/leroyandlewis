/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#002C4D',
        cream: '#EEECE3',
        gold: '#C0A02F'
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
