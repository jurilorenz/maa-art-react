/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neumorphism: '8px 8px 16px #2e3237, -8px -8px 16px #1c1e22', 
        'neumorphism-hover': '10px 10px 20px #2e3237, -10px -10px 20px #1c1e22', 
      },
    },
  },
  plugins: [],
}

