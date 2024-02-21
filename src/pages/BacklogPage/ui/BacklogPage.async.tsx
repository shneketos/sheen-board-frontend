import { lazy } from "react";

export const BacklogPageAsync = lazy(async () => await import("./BacklogPage"));
