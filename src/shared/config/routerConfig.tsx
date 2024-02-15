import { Dashboard } from "pages/Dashboard";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { OverviewPage } from "pages/OverviewPage";
import { SigninPage } from "pages/SigninPage";
import { SignupPage } from "pages/SignupPage";
import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
    SIGNIN = "signin",
    SIGNUP = "signup",
    NOTFOUND = "notfound",
    DASHBOARD = "dashboard",
    OVERVIEW = "overview",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.SIGNIN]: "/signin",
    [AppRoutes.SIGNUP]: "/signup",
    [AppRoutes.DASHBOARD]: "/dashboard",
    [AppRoutes.OVERVIEW]: "/dashboard/:id/overview", // Use :id to indicate a dynamic parameter
    [AppRoutes.NOTFOUND]: "*", // It's common to us
};

export const RoutesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.SIGNIN]: {
        path: RouterPath.signin,
        element: <SigninPage />,
    },
    [AppRoutes.SIGNUP]: {
        path: RouterPath.signup,
        element: <SignupPage />,
    },
    [AppRoutes.DASHBOARD]: {
        path: RouterPath.dashboard,
        element: <Dashboard />,
    },
    [AppRoutes.OVERVIEW]: {
        path: RouterPath.overview,
        element: <OverviewPage />,
    },
    /// ////////
    [AppRoutes.NOTFOUND]: {
        path: RouterPath.notfound,
        element: <NotFoundPage />,
    },
};
