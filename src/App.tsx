import React from "react";
import { Router } from "./routing/Router";

export const App = () => <Router />;

/*import { Grid } from "@mui/material";
import DividedOptions from "../src/components/Option";
import { Container } from "@mui/system";
import { Outlet } from "react-router";
import PersistentDrawerLeft from "./components/sideBar";

export default function BasicGrid() {
    return (
        <Container>
            <Grid container rowGap={6}>
                <Grid>
                    <DividedOptions />
                </Grid>
                <Grid direction={"row"}>
                    <PersistentDrawerLeft />
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
}
*/
