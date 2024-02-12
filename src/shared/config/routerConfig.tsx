import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { SigninPage } from "pages/SigninPage";
import { SignupPage } from "pages/SignupPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  SIGNIN = "signin",
  SIGNUP = "signup",
  NOTFOUND = "notfound",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SIGNIN]: "/signin",
  [AppRoutes.SIGNUP]: "/signup",

  ////////
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

  ///////////
  [AppRoutes.NOTFOUND]: {
    path: RouterPath.notfound,
    element: <NotFoundPage />,
  },
};
