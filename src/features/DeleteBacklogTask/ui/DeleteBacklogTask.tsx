import React from "react";
import styles from "./DeleteBacklogTask.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const DeleteBacklogTask = () => {
    return (
        <Button theme={ButtonTheme.CLEAR} className={styles.btn}>
            <TrashcanIcon className={styles.icon} />
        </Button>
    );
};
