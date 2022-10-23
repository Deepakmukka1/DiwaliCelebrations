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
        
          "100%": {
            // opacity: 1,
            bottom: "70rem",
            visibility: "visible",
            // translate: "650px 650px",
            rotate: "0deg",
          },
        },
        moveupfast: {
          "0%": {
          
            bottom: "3rem",
            rotate: "5deg",
          },
        
          "100%": {
           
            bottom: "70rem",
            visibility: "visible",
          
            rotate: "0deg",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moveup: "2s moveup 1s ease-in 3",
        moveupfast: "0.5s moveupfast 1s ease-in 6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
