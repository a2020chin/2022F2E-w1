/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        signBtnImg : "url('./images/signup.png')",
        signFocusBtnImg : "url('./images/signupFocus.png')",
        signDisabledBtnImg : "url('./images/signDisabledBtnImg.png')",
        loginBtnImg : "url('./images/login.png')",
        loginFocusBtnImg : "url('./images/loginFocus.png')",
        goldImg : "url('./images/gold.png')",
        boardImg : "url('./images/board.png')"
      },
    },
  },
  plugins: [],
}
