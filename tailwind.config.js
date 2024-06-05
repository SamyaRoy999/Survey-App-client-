/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Josefin: ["Josefin Sans"," sans-serif"],
      Shanti: ["Shanti", "sans-serif"],
    }
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light", "dark"],
  },
  
}

