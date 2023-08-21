/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {'player-h': '360px'},
      width: {'player-w': '640px'},
      colors: {
      },
      fontFamily: {
        // 'font1': ['Big Shoulders Text', 'cursive'],
        // 'font2': ['Fjalla One', 'sans-serif'],
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}