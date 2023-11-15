/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#e9e9e5',
      'pure-black': '#000000',
      'light-black': '#242424',
    },
    extend: {
      animation: {
        'bounce-1500': 'bounce 1.5s infinite',
        'bounce-2000': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
