module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        moveup: {
          "0%": {
            // opacity: 0.4,
            bottom: "3rem",
            // translate: "0 0",
            rotate: "5deg",
          },
          "50%": {
            // opacity: 0.5,
            visibility: "visible",
            rotate: "2deg",
        
          },
          "100%": {
            // opacity: 1,
            bottom: "70rem",
            visibility: "visible",
            // translate: "650px 650px",
            rotate: "0deg",
          },
        },
        moveleft: {
          "0%": {
            // opacity: 0.4,
            bottom: "3rem",
            translate: "-250px 0",
            rotate: "-15deg",

          },
          "50%": {
            // opacity: 0.5,
            visibility: "visible",
            rotate: "-28deg",
        
          },
          "100%": {
            // opacity: 1,
            bottom: "70rem",
            visibility: "visible",
            translate: "-600px 0",
            rotate: "-30deg",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moveup: "2s moveup 1s ease-in 3",
        moveleft: "1.5s moveleft 1s ease-in 3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
