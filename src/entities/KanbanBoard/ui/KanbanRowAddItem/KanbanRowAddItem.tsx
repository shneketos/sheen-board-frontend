import React, { memo } from "react";
import styles from "./KanbanRowAddItem.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { AddKanbanCard } from "features/AddKanbanCard";
import { KanbanRow } from "entities/KanbanBoard/model/types/KanbanTypes";
export const KanbanRowAddItem = memo((props: KanbanRow) => {
    const { id, title } = props;
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
            {openAdd && (
                <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                    <AddKanbanCard
                        id={id}
                        rowTitle={title}
                        onClose={() => setOpenAdd(false)}
                    />
                </Modal>
            )}
        </>
    );
});
