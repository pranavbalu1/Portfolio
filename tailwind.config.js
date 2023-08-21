/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'grainy-background': 'src(/components/grainy-background.png))'
    },
  },
  plugins: [],
}