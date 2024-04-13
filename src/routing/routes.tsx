import { Navigate, RouteObject } from "react-router-dom";
import PersistentDrawerLeft from "../components/sideBar";
import { app1RoutingPrefix } from "./constants";
import { Suspense, lazy } from "react";
const App1Lazy = lazy(() => import("../components/App1"));

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <PersistentDrawerLeft />,
        children: [
            {
                index: true,
                element: <Navigate to={`/${app1RoutingPrefix}`} />,
            },
            {
                path: `/${app1RoutingPrefix}/*`,
                element: (
                    <Suspense fallback="Loading App1...">
                        <App1Lazy />
                    </Suspense>
                ),
            },
        ],
    },
];
