import React from "react";
import styles from "./SigninForm.module.scss";
import slogo from "shared/assets/icons/Slogo.png";
import Input, { InputTheme } from "shared/ui/Input/Input";
import Email from "shared/assets/icons/email.svg?react";
import Pass from "shared/assets/icons/password.svg?react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { SignInByUsername } from "features/SignInByUsername/model/service/SignInByUsername";
export const SigninForm = () => {
    const [emailValue, setEmailValue] = React.useState("");
    const [passValue, setPassValue] = React.useState("");
    const [auth, setAuth] = React.useState(false);

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
                            onChange={(val) => setEmailValue(val)}
                            type="email"
                            value={emailValue}
                            theme={InputTheme.AUTH}
                            placeholder="Enter Your Email"
                        >
                            <Email />
                        </Input>
                        <Input
                            onChange={(val) => setPassValue(val)}
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
                        <Button
                            theme={ButtonTheme.REGISTER}
                            onClick={() => setAuth(true)}
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
            {auth && (
                <SignInByUsername email={emailValue} password={passValue} />
            )}
        </>
    );
};

export default SigninForm;
