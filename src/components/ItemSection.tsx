import { ThemeProvider } from "@mui/material";
import { lazy } from "react";
import theme from "../theme/customTheme";
import { Suspense } from "react";
import Container from "@mui/material/Container";

const ItemSection = import("OrdersMicroApp/ItemTable");

const ItemSectionComp = () => {
    const FancyButtonCopy = lazy(() => {
        return ItemSection;
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
export default ItemSectionComp;
