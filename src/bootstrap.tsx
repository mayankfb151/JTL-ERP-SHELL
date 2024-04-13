import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routing/routes";

//creates a browser router
const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = createRoot(container!);

//render the sidebar it wraps the drawer and renders micro frontends using outlet
root.render(<RouterProvider router={router} />);
