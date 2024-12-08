/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dark: {
          500: "#1E1E1E",
        },
        "pink-pdu": {
          500: "#F9DAD1",
        },
        "orange-pdu": {
          500: "#E75C33",
        },
        "putih-susu": {
          500: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
