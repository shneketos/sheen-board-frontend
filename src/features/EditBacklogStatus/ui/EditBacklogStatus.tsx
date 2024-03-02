import React from "react";
import styles from "./EditBacklogStatus.module.scss";
import { type EditBacklogStatusProps } from "../model/types/EditBacklogStatus";

export const EditBacklogStatus = (props: EditBacklogStatusProps) => {
    const { onStatusEditingChange, status } = props;
    const StatusVariables = ["Not Started", "In Progress", "Completed"];
    const [newStatusValue, setNewStatusValue] = React.useState(status);

    const handleButtonClick = () => {
        onStatusEditingChange(false);
    };

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
