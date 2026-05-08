/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          bg: '#fff5f7',
          light: '#fce4ec',
          primary: '#f8bbd0',
          medium: '#f48fb1',
          accent: '#ec407a',
          dark: '#5d2e46',
          gold: '#f0d060',
          goldLight: '#f7e898',
          goldDark: '#d4a830',
          rose: '#e8a0bf',
          lavender: '#e1bee7',
          cream: '#fff0f5',
          mist: '#fceff1',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'sans-serif'],
        script: ['"Ma Shan Zheng"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(232, 160, 191, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(232, 160, 191, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
