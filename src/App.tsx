import Grid from "@mui/material/Grid";

import DividedOptions from "../src/components/Option";
import DateRow from "../src/components/DateRow";
import { Container } from "@mui/system";
import { Outlet } from "react-router";
import axios from "axios";

export default function BasicGrid() {
    return (
        <Container>
            <DividedOptions />
            <DateRow />
            <Outlet />
        </Container>
    );
}
