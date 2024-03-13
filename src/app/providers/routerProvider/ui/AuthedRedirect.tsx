import useAuthSelector from "entities/User/model/selector/UserSelector";
import { Navigate, useLocation } from "react-router-dom";
import { RouterPath } from "shared/config/routerConfig/routerConfig";

export const AuthedRedirect = ({ children }: { children: JSX.Element }) => {
    const auth = useAuthSelector();
    const location = useLocation();
    const signinRoute = RouterPath.signin;
    const signupRoute = RouterPath.signup;

    if (auth) {
        if (
            location.pathname === signinRoute ||
            location.pathname === signupRoute
        ) {
            return (
                <Navigate
                    to={RouterPath.dashboard}
                    state={{ from: location }}
                    replace
                />
            );
        }
    }

    return children;
};
