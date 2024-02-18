import React from "react";
import styles from "./KanbanRowAddItem.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const KanbanRowAddItem = () => {
    return (
        <Button className={styles.row_add} theme={ButtonTheme.CLEAR}>
            <PlusIcon width={16} height={16} />
            <span>Add New Task</span>
        </Button>
    );
};
