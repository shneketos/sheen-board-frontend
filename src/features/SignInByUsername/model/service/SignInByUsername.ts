import { $api } from "shared/api/api";
import { SigninByUsernameType } from "../types/SignInByUsernameType";
import { setCookie } from "nookies";
export const onClickSignInByUsername = async (props: SigninByUsernameType) => {
    const { email, password } = props;
    const params = {
        email: email,
        password: password,
    };
    try {
        const response = await $api.post("/auth/login", params);
        const token = response.data.token;
        setCookie(null, "_token", token, {
            path: "/",
        });
    } catch (err) {
        err;
    }
};
