import styles from "./DeleteBacklogSprint.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DeleteBacklogSprintService } from "../model/services/DeleteBacklogSprintService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { DeleteBacklogSprintProps } from "../model/types/DeleteBacklogSprintType";
export const DeleteBacklogSprint = (props: DeleteBacklogSprintProps) => {
    const { id } = props;
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickDeleteSprint = () => {
        DeleteBacklogSprintService({ id }).then(() => fetchBacklog(backlog.id));
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
