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
        'font1': ['Amethysta', 'serif'],
        'font2': ['Castoro', 'serif'],
        'font3': ['Heebo', 'sans-serif'],
        'font4': ['Suez One', 'serif']
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}