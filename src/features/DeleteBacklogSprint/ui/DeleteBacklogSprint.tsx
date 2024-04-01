import styles from "./DeleteBacklogSprint.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DeleteBacklogSprintService } from "../model/services/DeleteBacklogSprintService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { DeleteBacklogSprintProps } from "../model/types/DeleteBacklogSprintType";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";
export const DeleteBacklogSprint = (props: DeleteBacklogSprintProps) => {
    const { id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickDeleteSprint = () => {
        DeleteBacklogSprintService({ id }).then(() => {
            fetchBacklog(backlog.id);
            setVisible(true);
            setMessage("Sprint deleted!");
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
