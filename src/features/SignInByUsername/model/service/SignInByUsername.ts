import { $api } from "shared/api/api";
import { SigninByUsernameType } from "../types/SignInByUsernameType";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";

export const SignInByUsername = async (props: SigninByUsernameType) => {
    const { email, password } = props;
    const params = {
        email: email,
        password: password,
    };
    try {
        const response = await $api.post("/auth/login", params);
        const token = response.data.token;
        window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
        window.location.href = "/dashboard";
    } catch (err) {
        err;
    }
};
