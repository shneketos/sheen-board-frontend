import React from "react";
import styles from "./BacklogItem.module.scss";
import { DeleteBacklogTask } from "features/DeleteBacklogTask";
import { EditBacklogTaskTitle } from "features/EditBacklogTaskTitle";
import { EditBacklogStory } from "features/EditBacklogStory";
import { EditBacklogPriority } from "features/EditBacklogPriority";
import { EditBacklogStatus } from "features/EditBacklogStatus/ui/EditBacklogStatus";
export const BacklogItem = () => {
    const [titleEditing, setTitleEditing] = React.useState(false);
    const [storyEditing, setStoryEditing] = React.useState(false);
    const [priorityEditing, setPriorityEditing] = React.useState(false);
    const [statusEditing, setStatusEditing] = React.useState(false);
    const handleTitleEditingChange = (newTitleEditingValue: boolean) => {
        setTitleEditing(newTitleEditingValue);
    };
    const handleStoryEditingChange = (newStoryEditingValue: boolean) => {
        setStoryEditing(newStoryEditingValue);
    };
    const handlePriorityEditingChange = (newPriorityEditingValue: boolean) => {
        setPriorityEditing(newPriorityEditingValue);
    };
    const handleStatusEditingChange = (newStatusEditingValue: boolean) => {
        setStatusEditing(newStatusEditingValue);
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
                    onClick={() => setStoryEditing(!storyEditing)}
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
                <p
                    className={`${styles.item_block_content} ${styles.Low}`}
                    onClick={() => setPriorityEditing(!priorityEditing)}
                >
                    Medium
                </p>
                {priorityEditing && (
                    <EditBacklogPriority
                        onPriorityEditingChange={handlePriorityEditingChange}
                    />
                )}
            </div>
            <div className={`${styles.item_block} ${styles.status}`}>
                <span className={styles.item_block_info}>Status</span>
                <p
                    className={styles.item_block_content}
                    onClick={() => setStatusEditing(!statusEditing)}
                >
                    Not Started
                </p>
                {statusEditing && (
                    <EditBacklogStatus
                        onStatusEditingChange={handleStatusEditingChange}
                    />
                )}
            </div>
            <DeleteBacklogTask />
        </div>
    );
};
