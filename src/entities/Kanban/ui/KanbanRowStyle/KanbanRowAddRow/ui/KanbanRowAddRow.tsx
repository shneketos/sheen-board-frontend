import React from "react";
import styles from "./KanbanRowAddRow.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const KanbanRowAddRow = () => {
    return (
        <Button className={styles.row_add} theme={ButtonTheme.CLEAR}>
            <PlusIcon width={16} height={16} />
            <span>Add Row</span>
        </Button>
    );
};
