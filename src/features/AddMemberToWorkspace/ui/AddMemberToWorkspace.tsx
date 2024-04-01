import React, { useCallback } from "react";
import styles from "./AddMemberToWorkspace.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import CheckIcon from "shared/assets/icons/check.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { FindUserByEmail } from "../model/services/FindUserByEmail";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { AddMemberToWorkspaceService } from "../model/services/AddMemberToWorkspaceService";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";
export const AddMemberToWorkspace = () => {
    const [adding, setAdding] = React.useState(false);
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const [userValue, setUserValue] = React.useState("");
    const dash = useDashboardStore((state) => state.thisDash);
    const fetchMembers = useDashboardStore((state) => state.fetchDashMembers);
    const onClickChangeState = useCallback(() => {
        setUserValue("");
        setAdding(true);
    }, []);
    const onClickCancel = useCallback(() => {
        setAdding(false);
    }, []);
    const onClickConfrim = () => {
        FindUserByEmail({ email: userValue })
            .then((res) => {
                const newMemberId = res.data.id;
                const newMembers = dash.members.concat(newMemberId);
                !dash.members.includes(newMemberId) &&
                    AddMemberToWorkspaceService({
                        workspaceId: dash.id,
                        members: newMembers,
                    }).then(() => {
                        setAdding(false);
                        setVisible(true);
                        setMessage("Member added!");
                        setNotificationTheme(NotificationTheme.SUCCESS);
                        fetchMembers(dash.id);
                    });
            })
            .catch(() => {
                setAdding(false);
                setVisible(true);
                setMessage("User not found");
                setNotificationTheme(NotificationTheme.ERROR);
            });
    };
    return (
        <div className={styles.form}>
            {adding ? (
                <div className={styles.field}>
                    <Input
                        theme={InputTheme.FORM}
                        value={userValue}
                        onChange={(val) => setUserValue(val)}
                        placeholder="Enter user email"
                    />
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.btn_cancel}
                        onClick={onClickCancel}
                    >
                        <CloseIcon className={styles.icon} />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.btn_check}
                        onClick={onClickConfrim}
                        disabled={userValue.length < 5}
                    >
                        <CheckIcon
                            className={`${styles.icon} ${
                                userValue.length < 5 ? styles.disabled : ""
                            }`}
                        />
                    </Button>
                </div>
            ) : (
                <Button
                    className={styles.btn}
                    onClick={onClickChangeState}
                    theme={ButtonTheme.CLEAR}
                >
                    <PlusIcon width={16} height={16} />
                    <span className={styles.btn_text}>Add member</span>
                </Button>
            )}
        </div>
    );
};
