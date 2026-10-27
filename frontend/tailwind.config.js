/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'strain-bg': '#0c0c0c',
        'strain-bg-sec': '#1a1a1a',
        'strain-green': '#00a859',
        'strain-green-hover': '#008f4c',
        'strain-grey': '#6b6b6b',
        'strain-text-sec': '#8a8a8a',
      },
      fontFamily: {
        display: ['var(--font-display)', '"Bowlby One SC"', 'sans-serif'],
        sans: ['var(--font-sans)', '"Inter Tight"', 'sans-serif'],
        mono: ['var(--font-mono)', '"Space Mono"', 'monospace'],
        timeline: ['"Anton"', '"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      spacing: {
        'header': '80px',
      },
    },
  },
  plugins: [],
};
