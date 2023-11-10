/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['24px', '24px'],
      lg: ['40px', '28px'],
      xl: ['64px', '64px'],
    },
    extend: {},
  },
  plugins: [],
}



