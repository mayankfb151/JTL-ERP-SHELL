import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//contains shell routes
import routes from "./routing/routes";

//creates a browser router
const router = createBrowserRouter(routes);

//sets up the root dom node
const container = document.getElementById("root");
const root = createRoot(container!);

//render the sidebar it wraps the drawer and renders micro frontends on  react-router-dom outlet
root.render(<RouterProvider router={router} />);
