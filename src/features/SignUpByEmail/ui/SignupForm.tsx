import React from "react";
import styles from "./SignupForm.module.scss";
import slogo from "shared/assets/icons/Slogo.png";
import Input, { InputTheme } from "shared/ui/Input/Input";
import User from "shared/assets/icons/user.svg";
import Email from "shared/assets/icons/email.svg";
import Pass from "shared/assets/icons/password.svg";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const SignupForm = () => {
    const [loginValue, setLoginValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [passValue, setPassValue] = React.useState("");
    const onChangeName = (val: string) => {
        setLoginValue(val);
    };

    const onChangePassword = (val: string) => {
        setPassValue(val);
    };

    const onChangeEmail = (val: string) => {
        setEmailValue(val);
    };

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
                            onChange={onChangeName}
                            value={loginValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Nickname"
                        >
                            <User />
                        </Input>
                        <Input
                            onChange={onChangeEmail}
                            value={emailValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Email"
                            type="email"
                        >
                            <Email />
                        </Input>
                        <Input
                            onChange={onChangePassword}
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
                        <Button theme={ButtonTheme.REGISTER}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </>
    );
};
