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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-glow': '0 0 10px rgba(51, 51, 53, 0.39), 0 0 20px rgba(51, 51, 53, 0.3)',
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
