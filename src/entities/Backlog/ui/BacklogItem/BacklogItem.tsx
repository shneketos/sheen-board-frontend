import React from "react";
import styles from "./BacklogItem.module.scss";
export const BacklogItem = () => {
    return (
        <div className={styles.backlog_item}>
            <td className={styles.backlog_title}>Задача</td>
            <td className={styles.backlog_points}>10 story points</td>
            <td className={styles.backlog_priority}>Low</td>
            <td className={styles.backlog_status}>Done</td>
        </div>
    );
};
