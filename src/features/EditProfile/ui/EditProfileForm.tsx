import React from "react";
import styles from "./EditProfileForm.module.scss";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useUserStore } from "entities/User";
import { EditProfileService } from "../model/services/EditProfileService";
export const EditProfileForm = () => {
    const [editing, setEditing] = React.useState(false);
    const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);
    const [usernameValue, setUsernameValue] = React.useState(user.name);
    const [emailValue, setEmailValue] = React.useState(user.email);
    const onClickConfirm = () => {
        EditProfileService({
            id: user.id,
            name: usernameValue,
            email: emailValue,
        })
            .then(() => setEditing(false))
            .then(() => fetchUser());
    };
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
                            onClick={onClickConfirm}
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
