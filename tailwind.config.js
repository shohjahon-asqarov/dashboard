/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/main.js"],
  theme: {
    extend: {
      colors: {
        background: '#0A0316',
        surface: '#17172F',
        card: '#1C1C3A',
        primary: '#7C3AED',
        primaryLight: '#A668FF',
        success: '#30B28C',
        danger: '#EF4444',
        warning: '#EC7C30',
        muted: '#A1A1AA',
        text: '#D4D4D8',
        'header-text': '#7F8596',
        'input-border': '#494E5B80',
        'light-black': '#1F2128',
        'light-black-active': '#31343F',
        white: '#FCFCF9',
        'dark-1': '#1F1F27',
        'dark-2': '#2D2D38',
        'border': '#374151',
        'success-light': 'rgba(16,185,129,0.1)',
        'success-text': '#10b981',
        'warning-light': 'rgba(249,115,22,0.1)',
        'warning-text': '#f97316',
        'dark-3': '#161327',
        'dark-4': '#2e2b3f',
        'header-bg': '#ffffff0d',
        'search-text': '#7e8495'
      },
      maxWidth: {
        '1440': '1440px'
      },
      fontSize: {
        'header': '32px'
      },
      spacing: {
        'switch': '2px'
      },
      backdropBlur: {
        header: '12px'
      },
      screens: {
        '1420': '1420px',
        '1000': '1000px'
      }
    },
  },
  plugins: [],
}

