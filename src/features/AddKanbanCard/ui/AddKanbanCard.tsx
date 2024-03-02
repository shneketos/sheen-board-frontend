import { type KanbanRowProps } from "entities/Kanban";
import React from "react";
import styles from "./AddKanbanCard.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const AddKanbanCard = (props: KanbanRowProps) => {
    const { id, title, onClose } = props;
    console.log(title, id);
    const [titleValue, setTitleValue] = React.useState("");

    const onChangeTitle = (val: string) => {
        setTitleValue(val);
    };

    const onClickAddCard = () => {
        console.log(`added card ${titleValue}in row ${title},id ${id} `);
        onClose();
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new task</p>
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
                    onChange={onChangeTitle}
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
                    onClick={onClickAddCard}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};
