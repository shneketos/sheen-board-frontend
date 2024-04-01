import React from "react";
import styles from "./AddBacklogTask.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { addBacklogTaskProps } from "../model/types/AddBacklogTaskType";
import { addBacklogTaskService } from "../model/services/AddBacklogTaskService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";

export const AddBacklogTask = (props: addBacklogTaskProps) => {
    const { onClose, id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const [titleValue, setTitleValue] = React.useState("");
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickCreate = () => {
        addBacklogTaskService({ id: id, title: titleValue }).then(() => {
            onClose();
            setVisible(true);
            setMessage("Task added!");
            setNotificationTheme(NotificationTheme.SUCCESS);
            fetchBacklog(backlog.id);
        });
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Create new task</p>
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
                    theme={InputTheme.FORM}
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
                    onClick={onClickCreate}
                >
                    Create
                </Button>
            </div>
        </div>
    );
};
