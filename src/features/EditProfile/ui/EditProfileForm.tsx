import { useCallback, useState } from "react";
import styles from "./EditProfileForm.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useUserStore } from "entities/User";
import { EditProfileService } from "../model/services/EditProfileService";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";

export const EditProfileForm = () => {
    const [editing, setEditing] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("");
    const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);
    const [usernameValue, setUsernameValue] = useState(user.name);
    const [emailValue, setEmailValue] = useState(user.email);
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const onClickEdit = useCallback(() => {
        setAvatarUrl("");
        setUsernameValue(user.name);
        setEmailValue(user.email);
        setEditing(true);
    }, [user.email, user.name]);
    const onClickCancel = useCallback(() => {
        setAvatarUrl("");
        setUsernameValue(user.name);
        setEmailValue(user.email);
        setEditing(false);
    }, [user.email, user.name]);
    const onClickConfirm = () => {
        const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
        const validURL = regex.test(avatarUrl);
        if (avatarUrl !== "" && validURL) {
            EditProfileService({
                id: user.id,
                name: usernameValue,
                email: emailValue,
                avatar: avatarUrl,
            }).then(() => {
                setEditing(false);
                setVisible(true);
                setMessage("Profile updated!");
                setNotificationTheme(NotificationTheme.SUCCESS);
                fetchUser();
            });
        }
        if (avatarUrl === "") {
            EditProfileService({
                id: user.id,
                name: usernameValue,
                email: emailValue,
                avatar: user.avatar,
            }).then(() => {
                setEditing(false);
                setVisible(true);
                setMessage("Profile updated!");
                setNotificationTheme(NotificationTheme.SUCCESS);
                fetchUser();
            });
        }
        if (!validURL) {
            setVisible(true);
            setMessage("Invalid URL");
            setNotificationTheme(NotificationTheme.ERROR);
        }
    };
    return (
        <>
            <div className={styles.form}>
                <div className={styles.form_top}>
                    <div className={styles.fields}>
                        <p className={styles.column}>User info</p>
                        <div className={styles.block}>
                            <p className={styles.title}>Username</p>
                            {!editing ? (
                                <span className={styles.text}>
                                    {usernameValue}
                                </span>
                            ) : (
                                <Input
                                    value={usernameValue}
                                    onChange={(val) => setUsernameValue(val)}
                                />
                            )}
                        </div>
                        <div className={styles.block}>
                            <p className={styles.title}>Email</p>
                            {!editing ? (
                                <span className={styles.text}>
                                    {emailValue}
                                </span>
                            ) : (
                                <Input
                                    value={emailValue}
                                    onChange={(val) => setEmailValue(val)}
                                    type="email"
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.avatar}>
                        <p className={styles.column}>Avatar</p>
                        <Avatar
                            src={user.avatar}
                            name={user.name}
                            size={AvatarSize.LARGE}
                        />
                        {editing && (
                            <Input
                                theme={InputTheme.DEFAULT}
                                value={avatarUrl}
                                onChange={(val) => setAvatarUrl(val)}
                                placeholder="Enter image URL"
                            />
                        )}
                    </div>
                </div>
                <div className={styles.form_btns}>
                    {editing ? (
                        <>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                onClick={onClickCancel}
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
                            onClick={onClickEdit}
                            className={styles.btn_edit}
                        >
                            Edit
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};
