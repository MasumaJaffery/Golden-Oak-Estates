/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#b2a070',
        gold1: '#a5956d',
        gold2: '#928461',
        footer: '#6e6349',
        text: '#eadfc2',
        text1: '#e2d1a3'// Custom gold color
      },
    },
  },
  plugins: [],
};
