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
      l: '40px',
      m: '24px',
      s: '20px',
      xs: '16px',
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
      'greyLight': '#DBE8ED',
    },
    extend: {
      gridTemplateColumns: {
        'sm-user': '96px 96px 96px',
        'md-user': '140px 140px 140px',
        'menu': '1fr'
      },
      gridTemplateRows: {
        'sm-user': '',
        'md-user': '',
        'lg-user': ''
      },
      boxShadow: {
        'darkest': '0 4px 0px 0px rgb(16 33 42 / 0.25)',
        'lightest': '0 4px 0px 0px rgb(107 137 151 / 0.25)',
        'blue': '0 4px 0px 0px rgb(17 140 135 / 0.25)',
        'orange': '0 4px 0px 0px rgb(207 139 19 / 0.25)',
      }
    },
  },
  plugins: [],
}
