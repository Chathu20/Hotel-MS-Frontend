/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#301748",
        c2: "#060a11ff",
        c3: "#2b4d68",
        c4: "#337882"
      },
    },
  },
  plugins: [],
};