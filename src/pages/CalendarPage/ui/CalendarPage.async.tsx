import { lazy } from "react";

export const CalendarPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./CalendarPage")), 1500);
        })
);
