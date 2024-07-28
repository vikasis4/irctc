/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#213d77',
        secondary:'#ffffff',
        accent:'#fb792b',
        sol:'#8dcdff',
        text:'#000000'
      }
    },
  },
  plugins: [],
}

