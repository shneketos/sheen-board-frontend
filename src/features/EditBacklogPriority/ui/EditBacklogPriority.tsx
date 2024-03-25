import React, { useCallback } from "react";
import styles from "./EditBacklogPriority.module.scss";
import { EditBacklogPriorityProps } from "../model/types/EditBacklogPriorityType";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { EditBacklogPriorityService } from "../model/services/EditBacklogPriorityService";

export const EditBacklogPriority = (props: EditBacklogPriorityProps) => {
    const { onPriorityEditingChange, priority, id } = props;
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const PriorityVariables = ["Low", "Medium", "High"];
    const [newPriorityValue, setNewPriorityValue] = React.useState(priority);

    const handleButtonClick = useCallback(() => {
        onPriorityEditingChange(false);
    }, [onPriorityEditingChange]);
    const onClickConfirm = () => {
        EditBacklogPriorityService({ id: id, priority: newPriorityValue })
            .then(() => fetchBacklog(backlog.id))
            .then(() => onPriorityEditingChange(false));
    };
    React.useEffect(() => {
        if (priority !== newPriorityValue) {
            onClickConfirm();
        }
    });
    return (
        <div className={styles.story} onMouseLeave={handleButtonClick}>
            <ul className={styles.variables_list}>
                {PriorityVariables.map((item) => (
                    <li
                        key={item}
                        className={`${styles.variable}  ${styles[item]} ${
                            newPriorityValue === item
                                ? styles[`${item}_active`]
                                : ""
                        }`}
                        onClick={() => {
                            setNewPriorityValue(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
