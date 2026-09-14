/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alpine: {
          50: '#f4f9fb',
          100: '#d9eef5',
          200: '#b3ddeb',
          300: '#7fc2db',
          400: '#4a9fc7',
          500: '#2d7fa8',
          600: '#1f668c',
          700: '#1a5373',
          800: '#184560',
          900: '#173b51',
          950: '#0e2333',
        },
        snow: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
