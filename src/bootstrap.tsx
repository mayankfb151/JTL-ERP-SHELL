import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderSection from "./components/MainSection";
import ItemSection from "./components/ItemSection";
import PersistentDrawerLeft from "./components/sideBar";
const router = createBrowserRouter([
    {
        path: "/",
        element: <PersistentDrawerLeft />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: "orders",
                element: <OrderSection />,
            },
            {
                path: "items",
                element: <ItemSection />,
            },
        ],
    },
]);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
