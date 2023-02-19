
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow-landing':'#FFC700',
      'black-landing':"#000000",
      'pruple-landing':"#9400D3",
      'red-landing':"#FF0000"
    },
    extend: {
      
    },
  },
  plugins: [],
}
