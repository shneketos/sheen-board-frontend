import React from "react";
import styles from "./BacklogAddTask.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { AddBacklogTask } from "features/AddBacklogTask";

export const BacklogAddTask = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    return (
        <div className={styles.addTask}>
            <Button
                className={styles.row_add}
                theme={ButtonTheme.CLEAR}
                onClick={() => setOpenAdd(true)}
            >
                <PlusIcon width={16} height={16} />
                <span>Add New Task</span>
            </Button>
            {openAdd && (
                <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                    <AddBacklogTask />
                </Modal>
            )}
        </div>
    );
};
