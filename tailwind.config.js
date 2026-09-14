/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
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
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
