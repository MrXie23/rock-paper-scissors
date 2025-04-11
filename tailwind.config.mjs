/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        choice: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '25%': { transform: 'translateY(-20px) scale(1.1)' },
          '50%': { transform: 'translateY(0) scale(1)' },
          '75%': { transform: 'translateY(-10px) scale(1.05)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        'choice-computer': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '25%': { transform: 'translateY(-20px) scale(1.1)' },
          '50%': { transform: 'translateY(0) scale(1)' },
          '75%': { transform: 'translateY(-10px) scale(1.05)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        result: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '70%': { opacity: 1, transform: 'scale(1.1)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'choice': 'choice 0.6s ease-in-out',
        'choice-computer': 'choice-computer 0.6s ease-in-out 0.2s',
        'result': 'result 0.5s ease-in-out 1s forwards'
      }
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
}; 