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
    },
    gridTemplateColumns: {
        fluidSkills: "repeat(auto-fit, minmax(10.313rem,1fr))",
        fluidCardExp: "repeat(auto-fit, minmax(22.813rem,1fr))",
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["cupcake"],
  },
}
