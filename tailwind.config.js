/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatYReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        floatY: "floatY 3s ease-in-out infinite",
        floatYReverse: "floatYReverse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
