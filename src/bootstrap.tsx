import { ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./theme/customTheme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
