import React from "react";
import styles from "./AddKanbanRow.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { addKanbanRowProps } from "../model/types/AddKanbanRowType";
import { AddKanbanRowService } from "../model/services/AddKanbanRowService";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";

export const AddKanbanRow = (props: addKanbanRowProps) => {
    const { onClose, id } = props;
    const [titleValue, setTitleValue] = React.useState("");
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    const kanban = useKanbanStore((state) => state.kanban);
    const onClickCreate = () => {
        AddKanbanRowService({ id: id, title: titleValue }).then(() => {
            onClose();
            fetchKanban(kanban.id);
        });
    };

    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Create new row</p>
                <Button
                    className={styles.btn_close}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    <CloseIcon width={20} height={20} />
                </Button>
            </div>
            <div className={styles.form_center}>
                <span>Title</span>
                <Input
                    className={styles.input}
                    value={titleValue}
                    onChange={(val) => setTitleValue(val)}
                    placeholder="Enter title"
                />
            </div>
            <div className={styles.form_bottom}>
                <Button
                    className={styles.btn_cancel}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    className={styles.btn_save}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickCreate}
                >
                    Create
                </Button>
            </div>
        </div>
    );
};
