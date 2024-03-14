import { $api } from "shared/api/api";
import { SigninByUsernameType } from "../types/SignInByUsernameType";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "entities/User";

export const SignInByUsername = (props: SigninByUsernameType) => {
    const navigate = useNavigate();
    const { email, password } = props;
    const fetchUser = useUserStore((state) => state.fetchUser);
    React.useEffect(() => {
        const SignIn = async () => {
            const params = {
                email: email,
                password: password,
            };
            try {
                const response = await $api.post("/auth/login", params);
                const token = response.data.token;
                window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
                fetchUser();
            } catch (err) {
                err;
            }
        };
        SignIn();
    }, [email, password, navigate, fetchUser]);

    return null;
};
