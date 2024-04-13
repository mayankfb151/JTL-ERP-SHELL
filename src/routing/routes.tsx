import { Navigate } from "react-router-dom";
import OrdersApp from "../apps/Order";
import SideBar from "../components/sidebar/sideBar";

const routes = [
    {
        path: "/",
        element: <SideBar />,
        errorElement: <p>404 not found</p>,
        children: [
            {
                index: true,
                element: <Navigate to={`/orders`} />,
            },
            {
                path: "orders",
                element: <OrdersApp />,
            },
        ],
    },
];

export default routes;
