import { ThemeProvider } from "@mui/material";
import { lazy } from "react";
import theme from "../theme/customTheme";
import { Suspense } from "react";
import Container from "@mui/material/Container";

const FancyButton = import("OrdersMicroApp/FancyButton");

const OrderSection = () => {
    const FancyButtonCopy = lazy(() => {
        return FancyButton;
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <FancyButtonCopy />
                </Suspense>
            </ThemeProvider>
        </>
    );
};
export default OrderSection;
