import React from "react";
import styles from "./EditProfileForm.module.scss";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const EditProfileForm = () => {
    const [editing, setEditing] = React.useState(false);
    const [usernameValue, setUsernameValue] = React.useState("vasya");
    const [emailValue, setEmailValue] = React.useState("vasya@mail.ru");
    const [passValue, setPassValue] = React.useState("123123");

    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <div className={styles.fields}>
                    <div className={styles.block}>
                        <p className={styles.title}>Username</p>
                        {!editing ? (
                            <span className={styles.text}>{usernameValue}</span>
                        ) : (
                            <Input
                                value={usernameValue}
                                onChange={(val) => setUsernameValue(val)}
                                className={styles.input}
                            />
                        )}
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Email</p>
                        {!editing ? (
                            <span className={styles.text}>{emailValue}</span>
                        ) : (
                            <Input
                                value={emailValue}
                                onChange={(val) => setEmailValue(val)}
                                className={styles.input}
                                type="email"
                            />
                        )}
                    </div>
                    <div className={styles.block}>
                        <p className={styles.title}>Password</p>
                        {!editing ? (
                            <span className={styles.text}>******</span>
                        ) : (
                            <Input
                                value={passValue}
                                onChange={(val) => setPassValue(val)}
                                className={styles.input}
                                type="password"
                            />
                        )}
                    </div>
                </div>
                <div className={styles.avatar}>
                    <div
                        className={styles.avatar}
                    >{`${usernameValue[0].toUpperCase()}`}</div>
                </div>
            </div>
            <div className={styles.form_btns}>
                {editing ? (
                    <>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={() => setEditing(false)}
                            className={styles.btn_cancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            className={styles.btn_save}
                        >
                            Save
                        </Button>
                    </>
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={() => setEditing(true)}
                        className={styles.btn_edit}
                    >
                        Edit
                    </Button>
                )}
            </div>
        </div>
    );
};
