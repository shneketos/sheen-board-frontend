import React from "react";
import styles from "./UpcomingEventItem.module.scss";
export const UpcomingEventItem = () => {
    return (
        <div className={styles.eventItem}>
            <p className={styles.eventItem_date}>Today,All day</p>
            <span className={styles.eventItem_title}>
                Department Heads Summit
            </span>
        </div>
    );
};
