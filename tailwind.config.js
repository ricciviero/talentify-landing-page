/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#121212",
        "low-dark": "#1E1E1E",
        "talentify": "#63F",
      },
    },
  },
  plugins: [],
}

