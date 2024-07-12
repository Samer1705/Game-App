/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': "rgba(var(--primary-purple))",
        'primary-blue': "rgba(var(--primary-blue))",
        'accent-purple': "rgba(var(--accent-purple))",
        'accent-blue': "rgba(var(--accent-blue))",
        'background': "rgba(var(--background))",
        'primary-text': "rgba(var(--primarytext))",
        'secondary-text': "rgba(var(--secondary-text))"
      },
    },
  },
  plugins: [],
}