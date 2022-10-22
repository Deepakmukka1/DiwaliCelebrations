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
            opacity: 0.4,
            bottom: "3rem",
            translate: "0 0",
            rotate: "50deg",
          },
          "50%": {
            opacity: 0.5,
            visibility: "visible",
            rotate: "55deg",
        
          },
          "100%": {
            opacity: 1,
            bottom: "70rem",
            visibility: "visible",
            translate: "650px 650px",
            rotate: "60deg",
          },
        },
        moveleft: {
          "0%": {
            opacity: 0.4,
            bottom: "3rem",
            translate: "0 0",
            rotate: "-50deg",
          },
          "50%": {
            opacity: 0.5,
            visibility: "visible",
            rotate: "-55deg",
        
          },
          "100%": {
            opacity: 1,
            bottom: "70rem",
            visibility: "visible",
            translate: "-350px -350px",
            rotate: "-60deg",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moveup: "moveup 2s ease-in 3",
        moveleft: "moveleft 2s ease-in 3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
