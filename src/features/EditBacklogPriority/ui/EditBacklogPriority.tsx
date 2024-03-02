import React from "react";
import styles from "./EditBacklogPriority.module.scss";
import { EditBacklogPriorityProps } from "../model/types/EditBacklogPriority";

export const EditBacklogPriority = (props: EditBacklogPriorityProps) => {
    const { onPriorityEditingChange, priority } = props;
    const PriorityVariables = ["Low", "Medium", "High"];
    const [newPriorityValue, setNewPriorityValue] = React.useState(priority);

    const handleButtonClick = () => {
        onPriorityEditingChange(false);
    };

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
                        onClick={() => setNewPriorityValue(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
