import { lazy } from "react";

export const SettingsPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./SettingsPage")), 1500);
        })
);
