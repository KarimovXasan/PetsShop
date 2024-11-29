/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1140':'1140px',
      },
      colors:{
        'blue':'rgba(0, 52, 89, 1)',
        'light-blue':'#FDFDFD',
        'gray':'rgba(102, 116, 121, 1)',
        'dark-blue':'rgba(0, 23, 31, 1)',
        'people':'#FCEED5',
      },
      boxShadow:{
        'pets':'0px 4px 28px -2px rgba(0, 0, 0, 0.08)',
        'product':'0px 4px 28px -2px rgba(0, 0, 0, 0.08)',
        'usefullshd':'0px 4px 28px -2px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}