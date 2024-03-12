import { $api } from "shared/api/api";

export const CheckAuth = async () => {
    const response = await $api.get("/users/me");
    console.log(response);
};
