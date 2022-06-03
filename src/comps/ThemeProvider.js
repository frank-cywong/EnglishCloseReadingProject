import React from "react";

import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#cc4449",
            contrastText: "#fff"
        },
        secondary: {
            main: "#519dec",
            contrastText: "#fff"
        }
    },
    typography: {
        fontFamily: `'Roboto Condensed', sans-serif`,
        htmlFontSize: 16,
    }
});

const ThemeProvider = props => {
    return <Provider theme={theme}>{props.children}</Provider>;
};

export default ThemeProvider;
