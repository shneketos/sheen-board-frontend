import React, { useCallback } from "react";
import styles from "./EditBacklogSprintTitle.module.scss";
import Input, { InputTheme } from "shared/ui/Input/Input";
import CheckIcon from "shared/assets/icons/check.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { type EditBacklogSprintTitleProps } from "../model/types/EditBacklogSprintTitleType";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { EditBacklogSprintTitleService } from "../model/services/EditBacklogSprintTitleService";

export const EditBacklogSprintTitle = (props: EditBacklogSprintTitleProps) => {
    const { onTitleEditingChange, title, id } = props;
    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const [NewTitle, setNewTitle] = React.useState(title);

    const onClickCancel = useCallback(() => {
        onTitleEditingChange(false);
    }, [onTitleEditingChange]);
    const onClickConfrim = () => {
        EditBacklogSprintTitleService({ id: id, title: NewTitle })
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
