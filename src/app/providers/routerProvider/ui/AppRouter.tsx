import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "shared/config/routerConfig/routerConfig";
import { Layout } from "shared/ui/Layout/Layout";
import { PageLoader } from "widgets/PageLoader/PageLoader";

export const AppRouter = () => {
    const isAuth = true;
    const routes = useMemo(
        () =>
            Object.values(RoutesConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }

                return true;
            }),
        [isAuth]
    );
    return (
        <Routes>
            {routes.map(({ element, path, sidebar_off }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Layout off={sidebar_off}>{element}</Layout>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};
