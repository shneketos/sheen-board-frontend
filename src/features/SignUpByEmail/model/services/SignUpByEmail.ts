import { $api } from "shared/api/api";
import { SignUpByEmailType } from "../types/SignUpByEmailType";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";

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
        window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
    } catch (err) {
        err;
    }
};
