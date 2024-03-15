import React from "react";
import styles from "./AddBacklogTask.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface addBacklogTaskProps {
    onClose?: () => void;
}
export const AddBacklogTask = (props: addBacklogTaskProps) => {
    const { onClose } = props;

    const [titleValue, setTitleValue] = React.useState("");

    const onClickCreate = () => {
        console.log(`created task ${titleValue}`);
        onClose();
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Create new task</p>
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
