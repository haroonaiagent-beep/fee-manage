/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070f1e',
          900: '#0a192f',
          800: '#0f274a',
          700: '#153966',
          600: '#1b4b82',
        },
        gold: {
          50: '#fbf9f1',
          100: '#f6f1de',
          200: '#ede1be',
          300: '#e3ce97',
          400: '#d7b96b',
          500: '#c59f3e',
          600: '#b0842e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
