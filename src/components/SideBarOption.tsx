import { AttachMoney, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";

import CustomListItem from "./sideBarListItem";

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
                    maxHeight: "2rem",
                    margin: 0,
                }}
            >
                <ListItemIcon>{props.icon}</ListItemIcon>
                <CustomListItem label={props.label} />
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
                                <CustomListItem label={listItemButton.label} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        </>
    );
}
