import React, { useCallback } from "react";
import styles from "./BacklogList.module.scss";
import { BacklogItem } from "../BacklogItem/BacklogItem";
import { DeleteBacklogSprint } from "features/DeleteBacklogSprint";
import { EditBacklogSprintTitle } from "features/EditBacklogSprintTitle";
import { BacklogAddTask } from "../BacklogAddTask/BacklogAddTask";
import { BacklogSprint } from "entities/Backlog/model/types/BacklogTypes";

export const BacklogList = (props: BacklogSprint) => {
    const { id, title, tasks } = props;
    const [titleEditing, setTitleEditing] = React.useState(false);
    const handleTitleEditingChange = useCallback(
        (newTitleEditingValue: boolean) => {
            setTitleEditing(newTitleEditingValue);
        },
        []
    );
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
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        status={task.status}
                        story={task.story}
                        priority={task.priority}
                    />
                ))}
                <BacklogAddTask id={id} />
            </div>
        </>
    );
};
