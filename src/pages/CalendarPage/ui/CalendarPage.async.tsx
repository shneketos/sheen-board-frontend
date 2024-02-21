import { lazy } from "react";

export const CalendarPageAsync = lazy(
    async () => await import("./CalendarPage")
);
