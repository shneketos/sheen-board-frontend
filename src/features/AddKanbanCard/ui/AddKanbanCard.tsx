import React from "react";
import styles from "./AddKanbanCard.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input, { InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { addKanbanCardProps } from "../model/types/AddKanbanCardType";
import { AddKanbanRowService } from "../model/services/AddKanbanCardService";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";

export const AddKanbanCard = (props: addKanbanCardProps) => {
    const { id, onClose, rowTitle } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();
    const [titleValue, setTitleValue] = React.useState("");
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    const kanban = useKanbanStore((state) => state.kanban);
    const onClickAddCard = () => {
        AddKanbanRowService({
            id: id,
            title: titleValue,
            rowTitle: rowTitle,
        }).then(() => {
            onClose();
            setVisible(true);
            setMessage("Card added");
            setNotificationTheme(NotificationTheme.SUCCESS);
            fetchKanban(kanban.id);
        });
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new task</p>
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
                    theme={InputTheme.FORM}
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
                    onClick={onClickAddCard}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};
