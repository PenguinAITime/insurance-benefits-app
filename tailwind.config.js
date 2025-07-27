/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',      // Vibrant Yellow
        secondary: '#4FD1C5',    // Soft Teal
        tertiary: '#F687B3',     // Gentle Pink
        charcoal: '#2D3748',
        softGray: '#F7FAFC',
        lightGray: '#E2E8F0',
        error: '#E53E3E',
      },
      fontFamily: {
        sans: ['System', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};