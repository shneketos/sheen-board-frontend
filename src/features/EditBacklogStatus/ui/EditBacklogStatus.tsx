import React, { useCallback } from "react";
import styles from "./EditBacklogStatus.module.scss";
import { type EditBacklogStatusProps } from "../model/types/EditBacklogStatusType";
import { EditBacklogStatusService } from "../model/services/EditBacklogStatusService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";

export const EditBacklogStatus = (props: EditBacklogStatusProps) => {
    const { onStatusEditingChange, status, id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const StatusVariables = ["Not Started", "In Progress", "Completed"];
    const [newStatusValue, setNewStatusValue] = React.useState(status);

    const handleButtonClick = useCallback(() => {
        onStatusEditingChange(false);
    }, [onStatusEditingChange]);
    const onClickConfirm = () => {
        EditBacklogStatusService({ id: id, status: newStatusValue })
            .then(() => fetchBacklog(backlog.id))
            .then(() => {
                onStatusEditingChange(false);
                setVisible(true);
                setMessage("Status changed");
                setNotificationTheme(NotificationTheme.SUCCESS);
            });
    };
    React.useEffect(() => {
        if (status !== newStatusValue) {
            onClickConfirm();
        }
    });
    return (
        <div className={styles.story} onMouseLeave={handleButtonClick}>
            <ul className={styles.variables_list}>
                {StatusVariables.map((item) => (
                    <li
                        key={item}
                        className={`${styles.variable} ${
                            newStatusValue === item ? styles.active : ""
                        }`}
                        onClick={() => setNewStatusValue(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
