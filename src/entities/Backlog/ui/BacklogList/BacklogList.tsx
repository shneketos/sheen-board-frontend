import React from "react";
import styles from "./BacklogList.module.scss";
import { BacklogItem } from "../BacklogItem/BacklogItem";
export const BacklogList = () => {
    return (
        <div className={styles.backlog_list}>
            <BacklogItem />
        </div>
    );
};
