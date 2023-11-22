/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      colors: {
        "primary": "#FFE100",
        "secondary": "#d926a9",
        "accent": "#1fb2a6",
        "neutral": "#2a323c",
        "base-100": "#1d232a",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#F8A272",
        "error": "#FF4343",
        "primary-content": "#CDCED0",
        "secondary-content": "#40454B"
      },
    },
  },
  plugins: [require("daisyui")],
}