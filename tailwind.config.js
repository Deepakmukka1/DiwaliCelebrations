module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-10deg)' },
            '50%': { transform: 'rotate(10deg)' },
          },
          moveup:{
           '0%':{
              opacity:0.2,
              bottom:'4rem'
   
          },
          '25%':{bottom:'8rem'},
          '50%':{bottom:'16rem'},
          '75%':{bottom:'32rem'},
           '100%':{  opacity:1,bottom:'64rem'}
          }
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          moveup: 'moveup 2s ease-in infinite',
        }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
