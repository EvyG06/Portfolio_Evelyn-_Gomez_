/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Varela Round", "sans-serif"] },
      colors: { primary: "#7E1E1E", accent: "#A23A3A", muted: "#FFF7F7" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
};