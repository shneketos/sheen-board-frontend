import React from "react";
import styles from "./EditBacklogStory.module.scss";
import { type EditBacklogStoryProps } from "../modal/types/EditBacklogStoryType";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CheckIcon from "shared/assets/icons/check.svg?react";

export const EditBacklogStory = (props: EditBacklogStoryProps) => {
    const { onStoryEditingChange, storypoints } = props;
    const [newStoryValue, setNewStoryValue] = React.useState(
        storypoints.toString()
    );

    const handleButtonClick = () => {
        onStoryEditingChange(false);
    };

    return (
        <div className={styles.editBlock}>
            <Input
                theme={InputTheme.DEFAULT}
                className={styles.input_edit}
                type="number"
                value={newStoryValue}
                onChange={(val) => setNewStoryValue(val.slice(0, 2))}
                maxLength={1}
                min={1}
                max={99}
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
