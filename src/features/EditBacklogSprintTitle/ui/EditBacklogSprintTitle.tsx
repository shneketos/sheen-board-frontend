import React from "react";
import styles from "./EditBacklogSprintTitle.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import CheckIcon from "shared/assets/icons/check.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface EditBacklogSprintTitleProps {
    onTitleEditingChange: (newTitleEditingValue: boolean) => void;
}

export const EditBacklogSprintTitle = ({
    onTitleEditingChange,
}: EditBacklogSprintTitleProps) => {
    const [NewTitle, setNewTitle] = React.useState("");

    const handleButtonClick = () => {
        onTitleEditingChange(false);
    };
    return (
        <div className={styles.editBlock}>
            <Input
                theme={InputTheme.DEFAULT}
                className={styles.input}
                value={NewTitle}
                onChange={setNewTitle}
            >
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.btn}
                    onClick={handleButtonClick}
                >
                    <CheckIcon className={styles.icon} />
                </Button>
            </Input>
        </div>
    );
};
