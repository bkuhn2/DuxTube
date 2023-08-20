/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {'142': '46rem'},
      width: {'142': '46rem', '100': '35rem'},
      margin: {'minus4': '-4px'},
      colors: {
        // 'dark-teal': '#275050',
        // 'light-blue': '#A6D5D4',
        // 'mid-blue': '#7CA8A7',
        // 'faded-pink': '#F2A795',
        // 'dark-pink': '#D18877',
        // 'dark-gold': '#A18836'
      },
      fontFamily: {
        // 'font1': ['Big Shoulders Text', 'cursive'],
        // 'font2': ['Fjalla One', 'sans-serif'],
        // 'font3': [ 'Poppins', 'sans-serif'],
        // 'font4': ['Quicksand', 'sans-serif']
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}