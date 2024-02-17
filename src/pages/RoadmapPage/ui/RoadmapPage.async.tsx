import { lazy } from "react";

export const RoadmapPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./RoadmapPage")), 1500);
        })
);
