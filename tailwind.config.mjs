import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fefae0',
        second: '#162114',
        third: '#294122'
      },
      boxShadow: {
        'custom-glow': '0 0 10px rgba(51, 51, 53, 0.39), 0 0 20px rgba(51, 51, 53, 0.3)',
      },
      fontFamily:{
        oswald: ['Oswald', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      animation: {
        loop: 'looptext 14s linear infinite'
      },
      keyframes:{
        looptext: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        }
      },
      screens: {
        'sm': { 'max': '600px' },   // Small devices (phones)
        'md': { 'min': '810px' },   // Medium devices (tablets)
        'lg': { 'min': '850px' },  // Large devices (desktops)
        'xl': { 'min': '1279px' },  // Extra large devices (large desktops)
        '2xl': { 'max': '1535px' }, // 2X extra large devices
      },
     
    },
  },
  plugins: [],
};
