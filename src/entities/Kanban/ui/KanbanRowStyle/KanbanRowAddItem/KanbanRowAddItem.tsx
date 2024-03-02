import React from "react";
import styles from "./KanbanRowAddItem.module.scss";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { type KanbanRowProps } from "entities/Kanban/model/types/KanbanTypes";
import { AddKanbanCard } from "features/AddKanbanCard";
export const KanbanRowAddItem = (props: KanbanRowProps) => {
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
                        title={title}
                        onClose={() => setOpenAdd(false)}
                    />
                </Modal>
            )}
        </>
    );
};
