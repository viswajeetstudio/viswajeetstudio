/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00A8E8',
          cyanDark: '#008bbf',
          amber: '#F7941D',
          amberDark: '#de7d0e',
          coral: '#F05A28',
          coralDark: '#d94716',
          charcoal: '#1A1A1A',
          charcoalLight: '#262626',
          charcoalDark: '#111111',
          bgGray: '#F4F4F4',
          borderGray: '#E5E5E5',
          textMuted: '#555555',
          royalBlue: '#0066B3',
          limeGreen: '#C5D93D',
          warmOrange: '#F37021',
          tealAccent: '#5BC2C7'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        script: ['"Playfair Display"', 'Georgia', 'serif'],
        dancing: ['"Dancing Script"', 'cursive']
      },
      letterSpacing: {
        widestUcase: '0.06em'
      },
      maxWidth: {
        'catalog': '1200px'
      }
    },
  },
  plugins: [],
}
