/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-color': {
          0: '#181818',
          1: '#1d1d1d',
          2: '#292929',
        },
        heading: {
          primary: '#ffffff',
          attention: {
            0: '#08fdd8',
            1: '#fd2155',
          },
        },
        secondary: '#515152',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        nunito: ["var(--font-nunito-sans)"],
        cursive: ["var(--font-cedarville-cursive)"],
      }
    },
  },
  plugins: [],
};
