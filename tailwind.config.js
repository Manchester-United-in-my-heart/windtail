/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio:{
        '4/6' : '4 / 6'
      }
    },
  },
  plugins: [],
}