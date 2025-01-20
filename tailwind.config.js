/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        videoConfrence: "url('./src/assets/images/videoConfrence.png')",
        whiteSymbol: "url('./src/assets/backgrounds/whiteSymbols.png')",
        conatiner:"url('./src/assets/images/container.png')",
      },
      colors: {
        customCream: '#F3F2F4',
        customGrey: '#BEB9C4',
        customBlack: '#09091F',
        customVoilet: '#2F2E4A',
        customBlue: '#434CA3',
        customDarkCream: '#897F7E',
        customDarkGrey: '#5C5B68',
        customcream: '#FDF8EE',
        customBg:'#F5F5F5',
        customPurple:'#4D2C5E',
        customOrange:'#FF7426'
      }
    },
  },
  plugins: [],
}

