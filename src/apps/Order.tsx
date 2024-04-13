import { lazy } from "react";
import { Suspense } from "react";
import theme from "../theme/customTheme";
import { ThemeProvider } from "@mui/material";

const Order = lazy(() => {
    return import("Orders/FancyButton");
});
const OrdersApp = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Order />
                </Suspense>
            </ThemeProvider>
        </>
    );
};
export default OrdersApp;
