import React from "react";
import styles from "./EditBacklogTaskTitle.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import CheckIcon from "shared/assets/icons/check.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
interface EditBacklogTaskTitleProps {
    onTitleEditingChange: (newTitleEditingValue: boolean) => void;
}
export const EditBacklogTaskTitle = ({
    onTitleEditingChange,
}: EditBacklogTaskTitleProps) => {
    const [NewTitle, setNewTitle] = React.useState("");
    const handleButtonClick = () => {
        onTitleEditingChange(false);
    };
    return (
        <div className={styles.editBlock}>
            <Input
                theme={InputTheme.DEFAULT}
                className={styles.input_edit}
                value={NewTitle}
                onChange={setNewTitle}
            ></Input>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.btn}
                onClick={handleButtonClick}
            >
                <CheckIcon className={styles.icon} />
            </Button>
        </div>
    );
};
