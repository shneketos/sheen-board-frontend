import React from "react";
import styles from "./EditBacklogPriority.module.scss";

interface EditBacklogPriorityProps {
    onPriorityEditingChange: (newPriorityEditingValue: boolean) => void;
}

export const EditBacklogPriority = ({
    onPriorityEditingChange,
}: EditBacklogPriorityProps) => {
    const PriorityVariables = ["Low", "Medium", "High"];
    const [newPriorityValue, setNewPriorityValue] = React.useState("Low");

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
