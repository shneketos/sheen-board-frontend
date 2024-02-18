import React from "react";
import styles from "./KanbanContent.module.scss";
import { KanbanRow } from "../../KanbanRowStyle/KanbanRow";
import { KanbanRowAddRow } from "../../KanbanRowStyle/KanbanRowAddRow/ui/KanbanRowAddRow";

export const KanbanContent = () => {
    return (
        <div className={styles.kanban_content}>
            <KanbanRow />
            <KanbanRow />
            <KanbanRow />
            <KanbanRow />
            <KanbanRow />
            <KanbanRowAddRow />
        </div>
    );
};
