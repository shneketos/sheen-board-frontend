import React from "react";
import styles from "./KanbanRowAddItem.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
export const KanbanRowAddItem = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    return (
        <>
            <Button
                className={styles.row_add}
                theme={ButtonTheme.CLEAR}
                onClick={() => setOpenAdd(true)}
            >
                <PlusIcon width={16} height={16} />
                <span>Add New Task</span>
            </Button>
            <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                <div>DOBAVIT TASK</div>
            </Modal>
        </>
    );
};
