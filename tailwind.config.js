/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ff4d5a",
        slate: {
          950: "#0f1115",
          900: "#11141c",
          800: "#1a1d23",
          700: "#22262d",
        }
      },
      boxShadow: {
        'chunky': '0 4px 0 0 rgba(0, 0, 0, 0.4)',
        'chunky-red': '0 4px 0 0 rgba(255, 77, 90, 0.3)',
      },
      fontFamily: {
        sans: ['Lexend', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }

    },
  },
  plugins: [],
}
