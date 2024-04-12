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
            main: "#1160b7",
        },
        primary: {
            main: "#b1d6f0",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "blue",
                    color: "white",
                },
                contained: {
                    backgroundColor: "red",
                },
            },
        },
    },
});

export default theme;
