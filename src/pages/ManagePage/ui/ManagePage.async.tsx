import { lazy } from "react";

export const ManagePageAsync = lazy(async () => await import("./ManagePage"));
