import React from "react";
import styles from "./SigninForm.module.scss";
import slogo from "shared/assets/icons/Slogo.png";
import Input, { InputTheme } from "shared/ui/Input/Input";
import Email from "shared/assets/icons/email.svg?react";
import Pass from "shared/assets/icons/password.svg?react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const SigninForm = () => {
    const [loginValue, setLoginValue] = React.useState("");
    const [passValue, setPassValue] = React.useState("");

    const onChangeName = (val: string) => {
        setLoginValue(val);
    };

    const onChangePassword = (val: string) => {
        setPassValue(val);
    };

    return (
        <>
            <div className={styles.signinForm}>
                <div className={styles.signinForm_wrapper}>
                    <div className={styles.signinForm_info}>
                        <img src={slogo} width={100} height={100} alt="" />
                        <h2>Welcome back!</h2>
                        <p>Login to your account</p>
                    </div>
                    <div className={styles.signinForm_fields}>
                        <Input
                            onChange={onChangeName}
                            type="email"
                            value={loginValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Email"
                        >
                            <Email />
                        </Input>
                        <Input
                            onChange={onChangePassword}
                            type="password"
                            value={passValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Password"
                        >
                            <Pass />
                        </Input>
                    </div>
                    <div className={styles.signinForm_bottom}>
                        <div className={styles.signinForm_bottom_links}>
                            <span>Don’t have an account?</span>
                            <AppLink to="/signup">Sign Up</AppLink>
                        </div>
                        <Button theme={ButtonTheme.REGISTER}>Sign In</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SigninForm;
