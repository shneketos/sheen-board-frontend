import React from "react";
import styles from "./BacklogAddSprint.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { AddBacklogSprint } from "features/AddBacklogSprint/ui/AddBacklogSprint";
export const BacklogAddSprint = () => {
    const [openAdd, setOpenAdd] = React.useState(false);

    return (
        <div className={styles.addSprint}>
            <Button
                className={styles.row_add}
                theme={ButtonTheme.CLEAR}
                onClick={() => setOpenAdd(true)}
            >
                <PlusIcon width={16} height={16} />
                <span>Add New Sprint</span>
            </Button>
            {openAdd && (
                <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                    <AddBacklogSprint onClose={() => setOpenAdd(false)} />
                </Modal>
            )}
        </div>
    );
};
