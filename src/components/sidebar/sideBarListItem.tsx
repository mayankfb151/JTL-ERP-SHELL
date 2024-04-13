import { Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

export default function SideBarListItem(props: any) {
    return (
        <ListItemText
            primary={
                <Typography
                    sx={{
                        fontSize: "0.9rem",
                    }}
                >
                    {props.label}
                </Typography>
            }
        />
    );
}
