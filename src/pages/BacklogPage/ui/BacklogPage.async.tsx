import { lazy } from "react";

export const BacklogPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./BacklogPage")), 1500);
        })
);
