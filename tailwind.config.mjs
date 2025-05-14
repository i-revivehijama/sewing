// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  fontFamily: {
    inter: ['var(--font-inter)', 'sans-serif'],
    bevietnam: ['var(--font-bevietnam)', 'sans-serif'],
  },
},
  },
  plugins: [],
};

export default config;
