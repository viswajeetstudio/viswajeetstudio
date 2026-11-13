/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F5',
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#ECE3D4',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          50: '#FCFAF6',
          100: '#F8F4EC',
          200: '#F1E9DB',
          300: '#E7DCB6',
        },
        walnut: {
          DEFAULT: '#38271D',
          50: '#F4ECE6',
          100: '#E4D3C5',
          300: '#AC886E',
          500: '#6C4D38',
          700: '#38271D',
          800: '#2A1D15',
          900: '#1C130D',
        },
        charcoal: {
          DEFAULT: '#191816',
          50: '#F2F2F1',
          100: '#E1E0DD',
          300: '#9B9892',
          500: '#5A5852',
          700: '#2D2B27',
          800: '#1F1E1B',
          900: '#141312',
        },
        gold: {
          DEFAULT: '#C3A576',
          light: '#DECBB0',
          dark: '#9A7D50',
          50: '#FBF8F2',
          100: '#F5EFE3',
        },
        stone: {
          warm: '#E8E2D8',
          border: '#E2DBD0',
          muted: '#8A857D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'editorial': '0.15em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(28, 24, 20, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(28, 24, 20, 0.16)',
        'subtle': '0 4px 20px -2px rgba(28, 24, 20, 0.05)',
      }
    },
  },
  plugins: [],
}
