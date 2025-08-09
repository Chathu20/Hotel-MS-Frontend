/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#301748",
        c2: "#03193bff",
        c3: "#03090eff",
        c4: "#337882"
      },
    },
  },
  plugins: [],
};