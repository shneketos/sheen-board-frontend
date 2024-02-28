import React from "react";
import styles from "./BacklogItem.module.scss";
import { DeleteBacklogTask } from "features/DeleteBacklogTask";
export const BacklogItem = () => {
    return (
        <div className={styles.backlog_item}>
            <div className={`${styles.item_block} ${styles.title}`}>
                <span className={styles.item_block_info}>Title</span>
                <p className={styles.item_block_content}>
                    Задача разработать UI
                </p>
            </div>
            <div className={`${styles.item_block} ${styles.story}`}>
                <span className={styles.item_block_info}>Story</span>
                <p className={styles.item_block_content}>17</p>
            </div>
            <div className={`${styles.item_block} ${styles.priority}`}>
                <span className={styles.item_block_info}>Priority</span>
                <p className={styles.item_block_content}>Medium Priority</p>
            </div>
            <div className={`${styles.item_block} ${styles.status}`}>
                <span className={styles.item_block_info}>Status</span>
                <p className={styles.item_block_content}>Активно</p>
            </div>
            <DeleteBacklogTask />
        </div>
    );
};
