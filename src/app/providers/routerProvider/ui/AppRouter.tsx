import { AboutPageAsync } from "pages/AboutPage";
import { MainPageAsync } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "shared/config/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RoutesConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
