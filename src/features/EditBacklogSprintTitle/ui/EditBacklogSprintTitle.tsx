import React from "react";
import styles from "./EditBacklogSprintTitle.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import CheckIcon from "shared/assets/icons/check.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { type EditBacklogSprintTitleProps } from "../model/types/EditBacklogSprintTitleType";

export const EditBacklogSprintTitle = (props: EditBacklogSprintTitleProps) => {
    const { onTitleEditingChange, title } = props;

    const [NewTitle, setNewTitle] = React.useState(title);

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
