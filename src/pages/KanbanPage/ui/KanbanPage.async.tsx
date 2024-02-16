import { lazy } from "react";

export const KanbanPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./KanbanPage")), 1500);
        })
);
