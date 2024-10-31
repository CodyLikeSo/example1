/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        rubik: ['"Rubik Mono One"', 'sans-serif'], // Add Rubik Mono One here
      },
      fontWeight: {
        extrabold: '1000', // Existing extrabold weight
        '1000': '1000',   // Custom weight of 1000
        '1200': '1200',   // Custom weight of 1200 (if needed)
      },
      screens: {
        '3xl': '1921px', // Custom breakpoint for any screen wider than 1920px
        '4xl': '3841px'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', filter: 'blur(100px)' }, // Start with opacity 0 and blur
          '100%': { opacity: '1', filter: 'blur(0)' },   // End with opacity 1 and no blur
        },
        fadeOut: {
          '0%': { opacity: '1', filter: 'blur(0)' },     // Start with opacity 1 and no blur
          '100%': { opacity: '0', filter: 'blur(100px)' }, // End with opacity 0 and blur
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        fadeOut: 'fadeOut 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
