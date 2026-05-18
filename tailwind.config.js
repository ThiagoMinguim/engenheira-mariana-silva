/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        verde: {
          DEFAULT: '#2F6F4E',
          light: '#A8CBB0',
          50: '#e8f5ee',
          100: '#d1ebdd',
          200: '#a3d7bb',
          300: '#75c399',
          400: '#4daa78',
          500: '#2F6F4E',
          600: '#275e42',
          700: '#1f4d36',
          800: '#173c2a',
          900: '#0f2b1e',
        },
        grafite: {
          DEFAULT: '#2E3238',
          light: '#4a4f57',
          dark: '#1a1d21',
        },
        cinza: {
          DEFAULT: '#F3F5F2',
          dark: '#e0e4de',
        },
        dourado: {
          DEFAULT: '#B8964E',
          light: '#D4BC8B',
          dark: '#9A7B3C',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(47, 111, 78, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(47, 111, 78, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
