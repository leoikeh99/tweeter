module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#2F80ED",
        gray1: "#333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#999",
      },
      borderWidth: {
        3: "3px",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      noto: ["Noto Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
