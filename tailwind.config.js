/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
        'plusJakarta':['Plus Jakarta Sans','Sans']
    }
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["cupcake"],
  },
}
