module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: "350px",
      sm: "480px",
      mmd: "615px",
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
        gray5: "#f2f2f2",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%",
        "9.5/10": "95%",
        "9.7/10": "97%",
        container: "1073px",
      },
      height: {
        av: "31px",
        card: "500px",
      },
      width: {
        card: "600px",
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
