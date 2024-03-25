import React, { useCallback } from "react";
import styles from "./EditBacklogTaskTitle.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import CheckIcon from "shared/assets/icons/check.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { type EditBacklogTaskTitleProps } from "../model/types/EditBacklogTaskTitleType";
import { EditBacklogTaskTitleService } from "../model/services/EditBacklogTaskTitleService";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";

export const EditBacklogTaskTitle = (props: EditBacklogTaskTitleProps) => {
    const { onTitleEditingChange, title, id } = props;
    const [NewTitle, setNewTitle] = React.useState(title);
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const onClickCancel = useCallback(() => {
        onTitleEditingChange(false);
    }, [onTitleEditingChange]);
    const onClickConfrim = () => {
        EditBacklogTaskTitleService({ id: id, title: NewTitle })
            .then(() => fetchBacklog(backlog.id))
            .then(() => onTitleEditingChange(false));
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
                className={styles.btn_cancel}
                onClick={onClickCancel}
            >
                <CloseIcon className={styles.icon} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.btn_check}
                onClick={onClickConfrim}
                disabled={NewTitle.length < 5}
            >
                <CheckIcon
                    className={`${styles.icon} ${
                        NewTitle.length < 5 ? styles.disabled : ""
                    }`}
                />
            </Button>
        </div>
    );
};
