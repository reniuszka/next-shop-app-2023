/** @type {import('tailwindcss').Config} */
// sprawdza gdzie tailwind ma patrzec w ktorych plikach beda te klasy tailwindowe
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
