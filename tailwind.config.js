/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#140e38",
        "fontC":{primary:"#e8f7ff"}
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}