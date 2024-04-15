import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteEvent = CustomEvent<string>;

const useSyncAppRouter = ({ basepath }: { basepath: string }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useeffect1");
        window.dispatchEvent(
            new CustomEvent("shell", { detail: location.pathname })
        );
        const appNavigated = ({ detail }: RouteEvent) => {
            if (detail == location.pathname) {
                return;
            }
            navigate(detail);
        };
        window.addEventListener("app", appNavigated as EventListener);

        return window.removeEventListener("app", appNavigated as EventListener);
    }, [location, basepath, navigate]);

    useEffect(() => {
        console.log("useeffect2");
        if (location.pathname.startsWith(basepath)) {
            window.dispatchEvent(
                new CustomEvent("shell", {
                    detail: location.pathname.replace(basepath, ""),
                })
            );
        }
    }, [location, basepath]);
};
export default useSyncAppRouter;
