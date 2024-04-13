import { Navigate } from "react-router-dom";
import OrdersApp from "../apps/Order";
import SideBar from "../components/sidebar/sideBar";
import ErrorPage from "../components/errorPage";

const routes = [
    {
        path: "/",
        element: <SideBar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                //navigate to orders on index
                element: <Navigate to={`/orders`} />,
            },
            {
                //render orders app
                path: "orders",
                element: <OrdersApp />,
            },
        ],
    },
];

export default routes;
