import Grid from "@mui/material/Grid";

import DividedOptions from "../components/Option";
import DateRow from "../components/DateRow";
import MainSection from "../components/MainSection";
import { Container } from "@mui/system";

export default function BasicGrid() {
    return (
        <Container>
            <DividedOptions />
            <DateRow />
            <MainSection />
        </Container>
    );
}
