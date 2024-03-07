import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "shared/config/routerConfig/routerConfig";
import { Layout } from "shared/ui/Layout/Layout";
import { PageLoader } from "widgets/PageLoader/PageLoader";

export const AppRouter = () => (
    <Suspense fallback={""}>
        <Routes>
            {Object.values(RoutesConfig).map(
                ({ element, path, sidebar_off }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Layout off={sidebar_off}>{element}</Layout>
                            </Suspense>
                        }
                    />
                )
            )}
        </Routes>
    </Suspense>
);
