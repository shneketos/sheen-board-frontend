import { AboutPageAsync } from "pages/AboutPage";
import { MainPageAsync } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const RoutesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPageAsync />,
  },
};
