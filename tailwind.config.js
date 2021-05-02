module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      gray: "#343434",
    },
    fontFamily: {
      sans: ["Open Sans"],
    },
    spacing: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "30px",
    },
  },
};
