import { lazy } from "react";

export const DashboardPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./DashboardPage")), 1500);
        })
);
