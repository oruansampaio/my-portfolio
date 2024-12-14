import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({ // let because i change the value of this variable in the code
    palette: {
      primary: {
        main: "#2E2E2E",
      },
      secondary: {
        main: "#E57373",
      },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
  });

theme = responsiveFontSizes(theme); // this line is added to make the font sizes responsive

  export default theme;