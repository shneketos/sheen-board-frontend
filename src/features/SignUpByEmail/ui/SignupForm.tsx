import React, { useCallback } from "react";
import styles from "./SignupForm.module.scss";
import slogo from "shared/assets/icons/Slogo.png";
import Input, { InputTheme } from "shared/ui/Input/Input";
import User from "shared/assets/icons/user.svg?react";
import Email from "shared/assets/icons/email.svg?react";
import Pass from "shared/assets/icons/password.svg?react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { onClickSignUpByEmail } from "../model/services/SignUpByEmail";
import { useUserStore } from "entities/User";
export const SignupForm = () => {
    const [loginValue, setLoginValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [passValue, setPassValue] = React.useState("");
    const fetchUser = useUserStore((state) => state.fetchUser);

    const onClickRegister = useCallback(() => {
        onClickSignUpByEmail({
            name: loginValue,
            email: emailValue,
            password: passValue,
        }).then(() => fetchUser());
    }, [emailValue, fetchUser, loginValue, passValue]);
    return (
        <>
            <div className={styles.signupForm}>
                <div className={styles.signupForm_wrapper}>
                    <div className={styles.signupForm_info}>
                        <img src={slogo} width={100} height={100} alt="" />
                        <h2>Get started</h2>
                        <p>Create your free account</p>
                    </div>
                    <div className={styles.signupForm_fields}>
                        <Input
                            onChange={(val) => setLoginValue(val)}
                            value={loginValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Nickname"
                        >
                            <User />
                        </Input>
                        <Input
                            onChange={(val) => setEmailValue(val)}
                            value={emailValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Email"
                            type="email"
                        >
                            <Email />
                        </Input>
                        <Input
                            onChange={(val) => setPassValue(val)}
                            value={passValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Password"
                            type="password"
                        >
                            <Pass />
                        </Input>
                    </div>
                    <div className={styles.signupForm_bottom}>
                        <div className={styles.signupForm_bottom_links}>
                            <span>Already have an account?</span>
                            <AppLink to={"/signin"}>Login</AppLink>
                        </div>
                        <Button
                            theme={ButtonTheme.REGISTER}
                            onClick={onClickRegister}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
