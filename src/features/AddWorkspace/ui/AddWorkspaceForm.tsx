import React from "react";
import styles from "./AddWorkspaceForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
interface addWorkspaceProps {
    onClose?: () => void;
}
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
export const AddWorkspaceForm = (props: addWorkspaceProps) => {
    const { onClose } = props;
    const [titleValue, setTitleValue] = React.useState("");

    const onChangeTitle = (val: string) => {
        setTitleValue(val);
    };
    const onClickAddCard = () => {
        console.log(`added workspace `);
        onClose();
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new workspace</p>
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
                <Button className={styles.btn_cancel} theme={ButtonTheme.CLEAR}>
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
