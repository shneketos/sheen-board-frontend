import React from "react";
import styles from "./DeleteBacklogSprint.module.scss";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const DeleteBacklogSprint = () => {
    return (
        <Button theme={ButtonTheme.CLEAR} className={styles.btn}>
            <TrashcanIcon className={styles.icon} />
        </Button>
    );
};
