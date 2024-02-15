import { lazy } from "react";

export const OverviewPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./OverviewPage")), 1500);
        })
);
