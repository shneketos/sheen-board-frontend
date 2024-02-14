import { lazy } from "react";

export const DashboardAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./Dashboard")), 1500);
        })
);
