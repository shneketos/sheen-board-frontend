import React, { useCallback } from "react";
import styles from "./EditBacklogStory.module.scss";
import { type EditBacklogStoryProps } from "../modal/types/EditBacklogStoryType";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CheckIcon from "shared/assets/icons/check.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { EditBacklogStoryService } from "../modal/services/EditBacklogStoryService";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";

export const EditBacklogStory = (props: EditBacklogStoryProps) => {
    const { onStoryEditingChange, storypoints, id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const backlog = useBacklogStore((state) => state.backlog);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const [newStoryValue, setNewStoryValue] = React.useState(
        storypoints.toString()
    );

    const onClickCancel = useCallback(() => {
        onStoryEditingChange(false);
    }, [onStoryEditingChange]);
    const onClickConfrim = () => {
        EditBacklogStoryService({
            id: id,
            storypoints: newStoryValue,
        })
            .then(() => fetchBacklog(backlog.id))
            .then(() => {
                onStoryEditingChange(false);
                setVisible(true);
                setMessage("Story changed");
                setNotificationTheme(NotificationTheme.SUCCESS);
            });
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
                className={styles.btn_cancel}
                onClick={onClickCancel}
            >
                <CloseIcon className={styles.icon} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.btn_check}
                onClick={onClickConfrim}
            >
                <CheckIcon className={styles.icon} />
            </Button>
        </div>
    );
};
