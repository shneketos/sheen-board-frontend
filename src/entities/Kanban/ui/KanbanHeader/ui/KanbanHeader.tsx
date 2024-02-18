import React from "react";
import styles from "./KanbanHeader.module.scss";
interface KanbanHeaderProps {
    onTypeChange: (type: string) => void;
}
export const KanbanHeader = (props: KanbanHeaderProps) => {
    const { onTypeChange } = props;
    const [type, setType] = React.useState("table");
    React.useEffect(() => {
        onTypeChange(type);
    }, [onTypeChange, type]);

    return (
        <div className={styles.kanbanheader}>
            <div className={styles.kanbanheader_left}>
                <p>Board Name</p>
            </div>
            <div className={styles.kanbanheader_right}>
                <button onClick={() => setType("list")}>list</button>
                <button onClick={() => setType("table")}>table</button>
            </div>
        </div>
    );
};
