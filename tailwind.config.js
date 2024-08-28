/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#E6E6FA',
          200: '#DCD0FF',
          300: '#BFA2DB',
          400: '#9B5DE0',
          500: '#6C2C91',
        },
      },
    },
  },
  plugins: [],
}