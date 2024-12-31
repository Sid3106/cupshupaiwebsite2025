/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A979',
          50: '#E6F7F1',
          100: '#CCEFE3',
          200: '#99DFC7',
          300: '#66CFAB',
          400: '#33BF8F',
          500: '#00A979',
          600: '#008761',
          700: '#006549',
          800: '#004331',
          900: '#002119'
        }
      }
    },
  },
  plugins: [],
};