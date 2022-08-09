/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
