import React, { memo } from "react";
import styles from "./KanbanRowAddRow.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { AddKanbanRow } from "features/AddKanbanRow";
export const KanbanRowAddRow = memo(() => {
    const [openAdd, setOpenAdd] = React.useState(false);

    return (
        <>
            <Button
                className={styles.row_add}
                theme={ButtonTheme.CLEAR}
                onClick={() => setOpenAdd(true)}
            >
                <PlusIcon width={16} height={16} />
                <span>Add Row</span>
            </Button>
            {openAdd && (
                <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                    <AddKanbanRow onClose={() => setOpenAdd(false)} />
                </Modal>
            )}
        </>
    );
});
