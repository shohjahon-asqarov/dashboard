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
        white: '#FCFCF9'
      },
      maxWidth: {
        '1440': '1440px'
      }
    },
  },
  plugins: [],
}

