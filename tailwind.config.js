/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        dark: {
          'bg': '#1a1a1a',
          'surface': '#2a2a2a',
          'primary': '#3a3a3a',
          'secondary': '#4a4a4a',
          'text-primary': '#e0e0e0',
          'text-secondary': '#a0a0a0',
          'accent': '#4f46e5',
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
