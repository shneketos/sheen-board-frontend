import { lazy } from "react";

export const MembersPageAsync = lazy(async () => await import("./MembersPage"));
