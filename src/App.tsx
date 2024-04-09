import { ThemeProvider, createTheme } from "@mui/material";
import { Suspense, lazy } from "react";
import theme from "./theme/customTheme";

const FancyButton = import("OrdersMicroApp/FancyButton");

const App = () => {
    const FancyButtonCopy = lazy(() => {
        return FancyButton;
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <Suspense>
                    <FancyButtonCopy />
                </Suspense>
                <h3> Welcome to React Boilerplate </h3>
            </ThemeProvider>
        </>
    );
};
export default App;
