import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";

import SideBarListItem from "./sideBarListItem";

export default function SideBarOption(props: any) {
    const [openSubmenu, setOpenSubMenu] = useState(false);

    const handleClick = () => {
        setOpenSubMenu(!openSubmenu);
    };
    return (
        <>
            <ListItemButton
                onClick={handleClick}
                sx={{
                    minHeight: 48,
                    px: 2.5,
                }}
            >
                <ListItemIcon>{props.icon}</ListItemIcon>
                <SideBarListItem
                    label={props.label}
                    sx={{ opacity: props.open ? 1 : 0 }}
                />
                {openSubmenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.listItemButtons.map((listItemButton: any) => {
                        return (
                            <ListItemButton
                                sx={{
                                    pl: 4,
                                    maxHeight: "2rem",
                                    margin: 0,
                                }}
                            >
                                <ListItemIcon></ListItemIcon>
                                <SideBarListItem label={listItemButton.label} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        </>
    );
}
