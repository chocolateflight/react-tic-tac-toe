/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    fontSize: {
      xl: '2rem',
    },
    fontFamily: {
      sans: ['Outfit']
    },
    colors: {
      'blueDark': '#31C3BD',
      'blueLight': '#65E9E4',
      'orangeDark': '#F2B137',
      'orangeLight': '#FFC860',
      'greenDark': '#1A2A33',
      'greenLight': '#1F3641',
      'greyDark': '#A8BFC9',
      'greyLight': '#DBE8ED'
    },
    extend: {},
  },
  plugins: [],
}
