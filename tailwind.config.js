/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto : '"Roboto", sans-serif',
        bungee_Tint: '"Bungee Tint", sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

