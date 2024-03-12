import { destroyCookie } from "nookies";
export const Logout = () => {
    destroyCookie(null, "_token", { path: "/" });
};
