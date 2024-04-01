import React from "react";
import styles from "./AddWorkspaceForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useUserStore } from "entities/User";
import { AddWorkspace } from "../model/services/AddWorkspace";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { addWorkspaceFormProps } from "../model/types/AddWorkspaceType";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";

export const AddWorkspaceForm = (props: addWorkspaceFormProps) => {
    const { onClose } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const [titleValue, setTitleValue] = React.useState("");
    const user = useUserStore((state) => state.user);
    const fetchDashboards = useDashboardStore((state) => state.fetchDashboards);
    const onClickAddCard = () => {
        AddWorkspace({
            title: titleValue,
            ownerId: user.id,
            members: [user.id],
        }).then(() => {
            onClose();
            setVisible(true);
            setMessage("Workspace created!");
            setNotificationTheme(NotificationTheme.SUCCESS);
            fetchDashboards(user.id);
        });
    };

    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new workspace</p>
                <Button
                    className={styles.btn_close}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    <CloseIcon width={20} height={20} />
                </Button>
            </div>
            <div className={styles.form_center}>
                <span>Title</span>
                <Input
                    className={styles.input}
                    value={titleValue}
                    onChange={(val) => setTitleValue(val)}
                    placeholder="Enter title"
                />
            </div>
            <div className={styles.form_bottom}>
                <Button
                    className={styles.btn_cancel}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    className={styles.btn_save}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickAddCard}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};
