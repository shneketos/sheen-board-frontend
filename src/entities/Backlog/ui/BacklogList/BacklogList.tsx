import React from "react";
import styles from "./BacklogList.module.scss";
import { BacklogItem } from "../BacklogItem/BacklogItem";
import { DeleteBacklogSprint } from "features/DeleteBacklogSprint";
import { EditBacklogSprintTitle } from "features/EditBacklogSprintTitle";
export const BacklogList = () => {
    const [titleEditing, setTitleEditing] = React.useState(true);

    const handleTitleEditingChange = (newTitleEditingValue: boolean) => {
        setTitleEditing(newTitleEditingValue);
    };
    return (
        <>
            <div className={styles.backlog_title}>
                {titleEditing ? (
                    <EditBacklogSprintTitle
                        onTitleEditingChange={handleTitleEditingChange}
                    />
                ) : (
                    <p
                        className={styles.backlog_list_title}
                        onClick={() => setTitleEditing(true)}
                    >
                        Название спринта
                    </p>
                )}
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
