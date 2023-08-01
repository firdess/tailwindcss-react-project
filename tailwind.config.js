/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      displayFont: ['Nunito', 'sans-serif'],
      textFont: ['Lora', 'serif']
    },
    extend: {
      colors:{
        'blackTitle':'#1E1E1E',
        'orangeBtn':'#FACA10'
      },
    },
  },
  plugins: [],
}

