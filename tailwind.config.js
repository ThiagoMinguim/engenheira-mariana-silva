/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Lora', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        primary: {
          50: '#e8f5f0',
          100: '#c1e4d8',
          200: '#96d3be',
          300: '#6bc2a4',
          400: '#4bb591',
          500: '#2ba87e',
          600: '#249b72',
          700: '#1a8a63',
          800: '#127854',
          900: '#06402B',
        },
      },
    },
  },
  plugins: [],
}
