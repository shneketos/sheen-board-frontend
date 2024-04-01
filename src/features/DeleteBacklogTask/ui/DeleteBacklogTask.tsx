import styles from "./DeleteBacklogTask.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DeleteBacklogTaskProps } from "../model/types/DeleteBacklogTaskType";
import { DeleteBacklogTaskService } from "../model/services/DeleteBacklogTaskService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";
export const DeleteBacklogTask = (props: DeleteBacklogTaskProps) => {
    const { id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickDeleteSprint = () => {
        DeleteBacklogTaskService({ id }).then(() => {
            fetchBacklog(backlog.id);
            setVisible(true);
            setMessage("Task deleted!");
            setNotificationTheme(NotificationTheme.SUCCESS);
        });
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={styles.btn}
            onClick={onClickDeleteSprint}
        >
            <TrashcanIcon className={styles.icon} />
        </Button>
    );
};
