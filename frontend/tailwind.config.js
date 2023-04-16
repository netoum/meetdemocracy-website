// /** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#40494D',
        'primary_bg': '#201E25'
      },

      fontFamily: {
        fontBase : "'Mukta', sans-serif", 
        fontHero: "'Source Sans Pro', sans-serif",
        fontSubtitle: "'Rammetto One', cursive",
      },

      fontWeight: {
        'bold': '700',
      },

      screens: {
        'lg':'1280px'
      },

      transitionProperty: {
        'height': 'height',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'slow': '300ms',
      },
    
    },
  },
  plugins: [],
}
