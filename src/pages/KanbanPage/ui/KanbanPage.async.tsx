import { lazy } from "react";

export const KanbanPageAsync = lazy(async () => await import("./KanbanPage"));
