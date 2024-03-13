import { BacklogPage } from "pages/BacklogPage";
import { CalendarPage } from "pages/CalendarPage";
import { Dashboard } from "pages/DashboardPage";
import { KanbanPage } from "pages/KanbanPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { OverviewPage } from "pages/OverviewPage";
import { SettingsPage } from "pages/SettingsPage";
import { SigninPage } from "pages/SigninPage";
import { SignupPage } from "pages/SignupPage";
import { type RouteProps } from "react-router-dom";

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    sidebar_off?: boolean;
};

export enum AppRoutes {
    MAIN = "main",
    SIGNIN = "signin",
    SIGNUP = "signup",
    NOTFOUND = "notfound",
    DASHBOARD = "dashboard",
    OVERVIEW = "overview",
    KANBAN = "kanban",
    BACKLOG = "backlog",
    CALENDAR = "calendar",
    SETTINGS = "settings",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.SIGNIN]: "/signin",
    [AppRoutes.SIGNUP]: "/signup",
    [AppRoutes.DASHBOARD]: "/dashboard",
    [AppRoutes.OVERVIEW]: "/dashboard/:id/overview",
    [AppRoutes.KANBAN]: "/dashboard/:id/kanban",
    [AppRoutes.BACKLOG]: "/dashboard/:id/backlog",
    [AppRoutes.CALENDAR]: "/dashboard/:id/calendar",
    [AppRoutes.SETTINGS]: "/settings",
    ///
    [AppRoutes.NOTFOUND]: "*",
};

export const RoutesConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
        sidebar_off: true,
    },
    [AppRoutes.SIGNIN]: {
        path: RouterPath.signin,
        element: <SigninPage />,
        sidebar_off: true,
    },
    [AppRoutes.SIGNUP]: {
        path: RouterPath.signup,
        element: <SignupPage />,
        sidebar_off: true,
    },
    [AppRoutes.DASHBOARD]: {
        path: RouterPath.dashboard,
        element: <Dashboard />,
        authOnly: true,
    },
    [AppRoutes.OVERVIEW]: {
        path: RouterPath.overview,
        element: <OverviewPage />,
        authOnly: true,
    },
    [AppRoutes.KANBAN]: {
        path: RouterPath.kanban,
        element: <KanbanPage />,
        authOnly: true,
    },
    [AppRoutes.BACKLOG]: {
        path: RouterPath.backlog,
        element: <BacklogPage />,
        authOnly: true,
    },
    [AppRoutes.CALENDAR]: {
        path: RouterPath.calendar,
        element: <CalendarPage />,
        authOnly: true,
    },
    [AppRoutes.SETTINGS]: {
        path: RouterPath.settings,
        element: <SettingsPage />,
        authOnly: true,
    },
    /// ////////
    [AppRoutes.NOTFOUND]: {
        path: RouterPath.notfound,
        element: <NotFoundPage />,
    },
};
