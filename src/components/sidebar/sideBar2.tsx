import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBarOption from "./SideBarOption";
import { AddBox, Book, PostAdd, Settings } from "@mui/icons-material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    //padding: theme.spacing(3),
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

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open);
        if (open == false) {
            setShow(false);
            setTimeout(() => {
                setShow(true);
            }, 300);
        } else {
            setShow(false);
        }
    };

    return (
        <Grid container spacing={3}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    {open && show && (
                        <Grid item container>
                            <Grid
                                container
                                direction={"row"}
                                justifyContent={"space-between"}
                                columnGap={1}
                            >
                                <Grid
                                    container
                                    alignItems={"center"}
                                    gap={2}
                                    item
                                    direction={"row"}
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
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                    )}
                    <IconButton
                        onClick={() => {
                            handleDrawerOpen();
                        }}
                    >
                        {open === false ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <SideBarOption
                        icon={<PostAdd />}
                        label={"Items"}
                        listItemButtons={[
                            { label: "Offers" },
                            { label: "Orders" },
                            { label: "Invoices" },
                            { label: "Invoices corrections" },
                        ]}
                    />
                    <SideBarOption
                        icon={<Settings />}
                        label={"Orders"}
                        listItemButtons={[
                            { label: "Offers" },
                            { label: "Orders" },
                            { label: "Invoices" },
                            { label: "Invoices corrections" },
                        ]}
                    />
                </List>
                <Divider />
            </Drawer>
            <Grid item xs overflow={"auto"}>
                <Outlet />
            </Grid>
        </Grid>
    );
}
