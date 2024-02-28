import React from "react";
import styles from "./BacklogList.module.scss";
import { BacklogItem } from "../BacklogItem/BacklogItem";
import { DeleteBacklogSprint } from "features/DeleteBacklogSprint";
export const BacklogList = () => {
    return (
        <>
            <div className={styles.backlog_title}>
                <p className={styles.backlog_list_title}>Название спринта</p>
                <DeleteBacklogSprint />
            </div>
            <div className={styles.backlog_list}>
                <BacklogItem />
                <BacklogItem />
                <BacklogItem />
            </div>
        </>
    );
};
