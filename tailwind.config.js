/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Archivo-Black'
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#E5B7E2',
        terciary: '#663B36'
      },
      backgroundImage: {
        hero: "url('./assets/bg.svg')"
      }
    }
  },
  plugins: []
}
