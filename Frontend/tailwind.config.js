/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0F172A",
        glass: "rgba(30, 41, 59, 0.45)",
        glassborder: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
}