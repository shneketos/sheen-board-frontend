import { lazy } from "react";

export const SigninPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST
            setTimeout(() => resolve(import("./SigninPage")), 1500);
        })
);
