import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        secondary: {
            main: "#E33E7F",
        },
        primary: {
            main: "#E33E7F",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "blue", // Change the background color of all buttons
                    color: "white",
                },
                contained: {
                    backgroundColor: "red", // Change the background color of contained buttons
                },
                // You can add specific styles for other button variants like outlined, text, etc.
            },
        },
    },
});

export default theme;
