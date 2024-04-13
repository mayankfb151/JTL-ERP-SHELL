import {
    AllOutOutlined,
    AttachMoney,
    Book,
    ChangeCircleRounded,
    Check,
    House,
    HouseRounded,
    MoneyOffCsred,
    PlusOne,
    Shield,
    StarTwoTone,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Grid } from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Outlet } from "react-router";

import SideBarOption from "./SideBarOption";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function SideBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openSubmenu, setOpenSubMenu] = React.useState(true);

    const handleClick = () => {
        setOpenSubMenu(!openSubmenu);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid container direction={"column"}>
            <Grid container direction={"row"}>
                <Grid
                    item
                    sx={{
                        flexGrow: 0,
                        display: "flex",
                    }}
                >
                    <AllOutOutlined
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />

                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: drawerWidth,
                                boxSizing: "border-box",
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <Grid
                                container
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        direction={"row"}
                                        alignItems={"center"}
                                        columnGap={1}
                                    >
                                        <img
                                            src="./logo.svg"
                                            width={"40rem"}
                                            height={"`20rem"}
                                        />
                                        <Typography fontSize={"1rem"}>
                                            Cloud ERP
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <IconButton onClick={handleDrawerClose}>
                                        {theme.direction === "ltr" ? (
                                            <ChevronLeftIcon />
                                        ) : (
                                            <ChevronRightIcon />
                                        )}
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </DrawerHeader>

                        <List
                            sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                            }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <SideBarOption
                                open={open}
                                icon={<Book />}
                                label={"Items"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                open={open}
                                icon={<AttachMoney />}
                                label={"Sales"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<Check />}
                                label={"Purchase"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<Shield />}
                                label={"Shipping"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<PlusOne />}
                                label={"Returns"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<MoneyOffCsred />}
                                label={"Payments"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<House />}
                                label={"Warehouse"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<ChangeCircleRounded />}
                                label={"Sales Channel"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                            <SideBarOption
                                icon={<StarTwoTone />}
                                label={"Static"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />

                            <SideBarOption
                                icon={<HouseRounded />}
                                label={"Store"}
                                listItemButtons={[
                                    { label: "Offers" },
                                    { label: "Orders" },
                                    { label: "Invoices" },
                                    { label: "Invoices corrections" },
                                ]}
                            />
                        </List>
                    </Drawer>
                    <Main open={open}>
                        <Grid item>
                            <Outlet />
                        </Grid>
                    </Main>
                </Grid>
            </Grid>
        </Grid>
    );
}
