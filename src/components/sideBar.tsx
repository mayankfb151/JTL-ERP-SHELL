import {
    AllOutOutlined,
    AttachMoney,
    Book,
    ChangeCircleRounded,
    Check,
    Expand,
    ExpandRounded,
    HourglassBottomRounded,
    House,
    HouseRounded,
    LocalShipping,
    MoneyOffCsred,
    PlusOne,
    Shield,
    StarTwoTone,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import { Button, Grid } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import * as React from "react";
import { Outlet } from "react-router";

import CustomListItem from "./sideBarListItem";
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
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
                        <Grid
                            item
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                height: "100px",
                            }}
                        >
                            <Outlet />
                        </Grid>
                    </Main>
                </Grid>
            </Grid>
        </Grid>
    );
}
