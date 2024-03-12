import React from "react";
import styles from "./AddKanbanRow.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface addKanbanRowProps {
    onClose?: () => void;
}

export const AddKanbanRow = (props: addKanbanRowProps) => {
    const { onClose } = props;

    const [titleValue, setTitleValue] = React.useState("");

    const onChangeTitle = (val: string) => {
        setTitleValue(val);
    };
    const onClickCreate = () => {
        console.log(`created row ${titleValue}`);
        onClose();
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
                    onClick={onClickCreate}
                >
                    Create
                </Button>
            </div>
        </div>
    );
};
