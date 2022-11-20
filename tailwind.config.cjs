/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ArcadeClassic': ['ArcadeClassic', 'sans-serif'],
      'Cubic' : ['Cubic', 'sans-serif']
    },
    extend: {
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      colors: {
        primaryGray: {
          100: '#F4F4F4',
          200: '#D9D9D9',
          300: '#BFBFBF',
          400: '#606060',
          500: '#424242',
          600: '#222222',
        },
        textWhite: '#E3E3E3',
      },
      backgroundImage: {
        'gradient-toNextSection': "radial-gradient(circle , transparent 0%, transparent 99.99%, #000000 99.99%, #000000 100%)",
        'goldImg': "url('https://i.imgur.com/o4FvKYP.png')",
        'master1': "url('https://imgur.com/1YZ5PWN.jpg')",
        'master2': "url('https://imgur.com/NVNpKdR.jpg')",
        'master3': "url('https://imgur.com/gemWpS5.jpg')",
        'master4': "url('https://imgur.com/lHawDVJ.jpg')",
      },
    },
  },
  plugins: [],
}
