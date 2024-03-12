import { $api } from "shared/api/api";
import { SignUpByEmailType } from "../types/SignUpByEmailType";
import { setCookie } from "nookies";

export const onClickSignUpByEmail = async (props: SignUpByEmailType) => {
    const { name, email, password } = props;
    const params = {
        name: name,
        email: email,
        password: password,
        avatar: "",
        workspaces: [],
    };
    try {
        const response = await $api.post("/auth/register", params);
        const token = response.data.token;
        setCookie(null, "_token", token, {
            path: "/",
        });
    } catch (err) {
        err;
    }
};
