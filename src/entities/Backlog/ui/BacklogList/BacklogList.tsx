import React from "react";
import styles from "./BacklogList.module.scss";
import { BacklogItem } from "../BacklogItem/BacklogItem";
import { DeleteBacklogSprint } from "features/DeleteBacklogSprint";
import { EditBacklogSprintTitle } from "features/EditBacklogSprintTitle";
import { BacklogSprintI } from "entities/Backlog/types/BacklogTypes";
import { AddBacklogTask } from "../AddBacklogTask/AddBacklogTask";

export const BacklogList = (props: BacklogSprintI) => {
    const { id, title, tasks } = props;
    console.log(id);
    const [titleEditing, setTitleEditing] = React.useState(false);
    const handleTitleEditingChange = (newTitleEditingValue: boolean) => {
        setTitleEditing(newTitleEditingValue);
    };
    return (
        <>
            <div className={styles.backlog_title}>
                {titleEditing ? (
                    <EditBacklogSprintTitle
                        onTitleEditingChange={handleTitleEditingChange}
                        title={title}
                    />
                ) : (
                    <p
                        className={styles.backlog_list_title}
                        onClick={() => setTitleEditing(true)}
                    >
                        {title}
                    </p>
                )}
                <DeleteBacklogSprint />
            </div>
            <div className={styles.backlog_list}>
                {tasks.map((task) => (
                    <BacklogItem
                        taskId={task.taskId}
                        title={task.title}
                        status={task.status}
                        storypoints={task.storypoints}
                        priority={task.priority}
                    />
                ))}
                <AddBacklogTask />
            </div>
        </>
    );
};
