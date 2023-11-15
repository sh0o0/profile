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
        'bounce-light-1500': 'bounce-light 1.5s infinite',
        'bounce-light-2000': 'bounce-light 2s infinite',
      },
      keyframes: {
        'bounce-light': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
