import { BacklogPage } from "pages/BacklogPage";
import { CalendarPage } from "pages/CalendarPage";
import { Dashboard } from "pages/DashboardPage";
import { KanbanPage } from "pages/KanbanPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { OverviewPage } from "pages/OverviewPage";
import { RoadmapPage } from "pages/RoadmapPage";
import { SettingsPage } from "pages/SettingsPage";
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
    KANBAN = "kanban",
    BACKLOG = "backlog",
    ROADMAP = "roadmap",
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
    [AppRoutes.ROADMAP]: "/dashboard/:id/roadmap",
    [AppRoutes.CALENDAR]: "/dashboard/:id/calendar",
    [AppRoutes.SETTINGS]: "/settings",
    ///
    [AppRoutes.NOTFOUND]: "*",
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
    [AppRoutes.KANBAN]: {
        path: RouterPath.kanban,
        element: <KanbanPage />,
    },
    [AppRoutes.BACKLOG]: {
        path: RouterPath.backlog,
        element: <BacklogPage />,
    },
    [AppRoutes.ROADMAP]: {
        path: RouterPath.roadmap,
        element: <RoadmapPage />,
    },
    [AppRoutes.CALENDAR]: {
        path: RouterPath.calendar,
        element: <CalendarPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RouterPath.settings,
        element: <SettingsPage />,
    },
    /// ////////
    [AppRoutes.NOTFOUND]: {
        path: RouterPath.notfound,
        element: <NotFoundPage />,
    },
};
