import React from "react";
import styles from "./EditKanbanRowTitleForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { EditKanbanRowTitleProps } from "../model/type/EditKanbanRowTitleType";
import { EditKanbanRowTitleService } from "../model/services/EditKanbanRowTitleService";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";

export const EditKanbanRowTitleForm = (props: EditKanbanRowTitleProps) => {
    const { id, title, onClose } = props;
    const kanban = useKanbanStore((state) => state.kanban);
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    console.log(id);
    const [titleValue, setTitleValue] = React.useState(title);

    const onClickConfirm = () => {
        EditKanbanRowTitleService({ id: id, title: titleValue })
            .then(() => onClose())
            .then(() => fetchKanban(kanban.id));
    };

    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Edit row title</p>
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
                    onClick={onClickConfirm}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};
