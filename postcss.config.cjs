module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        // Breakpoints
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",

        // // Colors (Open Color equivalents)
        // mainColor: "#f8f9fa", // gray[1]
        // secondaryColor: "#dee2e6", // gray[3]
        // mainBgColor: "#212529", // gray[9]
        // navColor: "#343a40", // gray[8]
        // borderColor: "#495057", // gray[7]
        // purpleColor: "#5c7cfa", // indigo[6]
        // redColor: "#fa5252", // red[6]
        // greenColor: "#20c997", // teal[5]
      },
    },
  },
};
