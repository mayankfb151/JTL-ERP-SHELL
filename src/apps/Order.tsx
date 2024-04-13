import { ThemeProvider } from "@mui/material";
import { lazy } from "react";
import { Suspense } from "react";

import theme from "../theme/customTheme";

const OrdersApp = () => {
    const FancyButtonCopy = lazy(() => {
        return import("Orders/FancyButton");
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
export default OrdersApp;
