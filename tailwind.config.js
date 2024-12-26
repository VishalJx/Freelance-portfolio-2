/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':{
          100: '#7f24ec',
          200: '#b867ff',
          300: '#7c03e7',
        },
        'secondary': {
          100: '#ffffff',
          200: '#b6b6b6',
          300: '#8f8f8f',
          400: '#686868',
          500: '#4f4f4f',
          600: '#dedede',
          700 : '#f2f2f2'
        }
      },
      boxShadow: {
        'bottom': '0 0.5px 8px 2px rgba(0, 0, 0, 0.1)', // Adjust the values as needed
      },
      maxWidth:{
        container: "1440px",
        lgContentContainer: "1240px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs:"768px",
      },
      screens :{
        xs: '320px',
        sm: '350px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        'home-bg': "linear-gradient(to right, rgba(231, 231, 231 , 0.8), rgba(231, 231, 231 , 0.8)), url(/public/assets/svg/home-bg.svg)",
      },
    },
  },
  plugins: [],
}

