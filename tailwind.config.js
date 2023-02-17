/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio:{
        '4/6' : '4 / 6'
      }
    },
  },
  plugins: [],
}