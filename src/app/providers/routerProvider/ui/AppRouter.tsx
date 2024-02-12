import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "shared/config/routerConfig";
import { PageLoader } from "widgets/PageLoader/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={""}>
      <Routes>
        {Object.values(RoutesConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="content__wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
