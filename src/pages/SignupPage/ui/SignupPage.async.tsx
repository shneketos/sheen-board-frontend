import { lazy } from "react";

export const SignupPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // @ts-expect-error:TEST

            setTimeout(() => resolve(import("./SignupPage")), 1500);
        })
);
