import styles from "./DeleteBacklogTask.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DeleteBacklogTaskProps } from "../model/types/DeleteBacklogTaskType";
import { DeleteBacklogTaskService } from "../model/services/DeleteBacklogTaskService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
export const DeleteBacklogTask = (props: DeleteBacklogTaskProps) => {
    const { id } = props;
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickDeleteSprint = () => {
        DeleteBacklogTaskService({ id }).then(() => fetchBacklog(backlog.id));
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
