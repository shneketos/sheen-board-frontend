import { $api } from "shared/api/api";

export const CheckAuth = async () => {
    const { data } = await $api.get("/users/me");
    return data;
};
