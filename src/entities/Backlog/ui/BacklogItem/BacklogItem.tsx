import React from "react";
import styles from "./BacklogItem.module.scss";
import { DeleteBacklogTask } from "features/DeleteBacklogTask";
import { EditBacklogTaskTitle } from "features/EditBacklogTaskTitle";
import { EditBacklogStory } from "features/EditBacklogStory";
export const BacklogItem = () => {
    const [titleEditing, setTitleEditing] = React.useState(false);
    const [storyEditing, setStoryEditing] = React.useState(false);
    const handleTitleEditingChange = (newTitleEditingValue: boolean) => {
        setTitleEditing(newTitleEditingValue);
    };
    const handleStoryEditingChange = (newStoryEditingValue: boolean) => {
        setStoryEditing(newStoryEditingValue);
    };
    return (
        <div className={styles.backlog_item}>
            <div className={`${styles.item_block} ${styles.title}`}>
                <span className={styles.item_block_info}>Title</span>
                {titleEditing ? (
                    <EditBacklogTaskTitle
                        onTitleEditingChange={handleTitleEditingChange}
                    />
                ) : (
                    <p
                        className={styles.item_block_content}
                        onClick={() => setTitleEditing(true)}
                    >
                        Задача разработать UI
                    </p>
                )}
            </div>
            <div className={`${styles.item_block} ${styles.story}`}>
                <span className={styles.item_block_info}>Story</span>

                <p
                    className={styles.item_block_content}
                    onClick={() => setStoryEditing(true)}
                >
                    17
                </p>
                {storyEditing && (
                    <EditBacklogStory
                        onStoryEditingChange={handleStoryEditingChange}
                    />
                )}
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
