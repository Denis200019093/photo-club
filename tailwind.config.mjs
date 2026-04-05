/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        film: {
          50:  '#faf8f4',
          100: '#f2ede3',
          200: '#e3d9c6',
          300: '#cfc0a0',
          400: '#b8a07a',
          500: '#a08560',
          600: '#8a6e4e',
          700: '#705841',
          800: '#5c4838',
          900: '#4d3d31',
          950: '#2a1f18',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        photoclub: {
          primary: '#a08560',
          secondary: '#705841',
          accent: '#cfc0a0',
          neutral: '#2a1f18',
          'base-100': '#faf8f4',
          'base-200': '#f2ede3',
          'base-300': '#e3d9c6',
          'base-content': '#2a1f18',
        },
      },
    ],
  },
};
