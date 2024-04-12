import { Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

export default function CustomListItem(props: any) {
    return (
        <ListItemText
            primary={
                <Typography
                    variant="body2"
                    style={{
                        color: "#000",
                        fontSize: "0.8rem",
                    }}
                >
                    {props.label}
                </Typography>
            }
        />
    );
}
