/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#00A9F1',
      },
    },
  },
  plugins: [],
}

