import React, { memo } from "react";
import styles from "./KanbanRow.module.scss";
import MoreIcon from "shared/assets/icons/more.svg?react";
import PencilIcon from "shared/assets/icons/pencil.svg?react";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { KanbanRowAddItem } from "../KanbanRowAddItem/KanbanRowAddItem";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import { Modal } from "shared/ui/modal/Modal";
import { EditKanbanRowTitleForm } from "features/EditKanbanRowTitle";
import { KanbanRowItem } from "../KanbanRowItem/KanbanRowItem";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { DeleteKanbanRowService } from "features/DeleteKanbanRow";
import { DeleteKanbanRowCards } from "features/DeleteKanbanRowCards";
import { KanbanRow as KanbanRowProps } from "entities/KanbanBoard/model/types/KanbanTypes";
import {
    useNotification,
    NotificationTheme,
} from "app/providers/notificationProvider";

export const KanbanRow = memo((props: KanbanRowProps) => {
    const { id, title, tasks } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const [rowModalOpened, setRowModalOpened] = React.useState(false);
    const [editTitle, setEditTitle] = React.useState(false);
    const kanban = useKanbanStore((state) => state.kanban);
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    const onClickDeleteCard = () => {
        DeleteKanbanRowService({ id })
            .then(() => setRowModalOpened(false))
            .then(() => {
                fetchKanban(kanban.id);
                setVisible(true);
                setMessage("Row deleted!");
                setNotificationTheme(NotificationTheme.SUCCESS);
            });
    };
    const onClickDeleteAllCards = () => {
        DeleteKanbanRowCards({ id })
            .then(() => setRowModalOpened(false))
            .then(() => {
                setVisible(true);
                setMessage("All card in row deleted!");
                setNotificationTheme(NotificationTheme.SUCCESS);
                fetchKanban(kanban.id);
            });
    };
    return (
        <div className={styles.row}>
            <div className={styles.row_top}>
                <div className={styles.row_top_wrapper}>
                    <p className={styles.row_top_title}>{title}</p>
                    <div className={styles.row_top_buttons}>
                        <Button
                            className={styles.row_top_btn}
                            theme={ButtonTheme.CLEAR}
                            onClick={() => setRowModalOpened(true)}
                        >
                            <MoreIcon width={16} height={16} />
                        </Button>
                        {rowModalOpened && (
                            <InfoModal className={styles.row_modal}>
                                <div
                                    className={styles.row_modal_wrapper}
                                    onMouseLeave={() =>
                                        setRowModalOpened(false)
                                    }
                                >
                                    <Button
                                        theme={ButtonTheme.CLEAR}
                                        className={
                                            styles.row_modal_wrapper_edit
                                        }
                                        onClick={() => setEditTitle(true)}
                                    >
                                        <PencilIcon width={15} height={15} />
                                        <span>Edit title</span>
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.CLEAR}
                                        className={
                                            styles.row_modal_wrapper_delete_cards
                                        }
                                        onClick={onClickDeleteAllCards}
                                    >
                                        <TrashcanIcon
                                            width={15}
                                            height={15}
                                            fill="red"
                                        />
                                        <span>Delete all cards</span>
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.CLEAR}
                                        className={
                                            styles.row_modal_wrapper_delete_row
                                        }
                                        onClick={onClickDeleteCard}
                                    >
                                        <TrashcanIcon
                                            width={15}
                                            height={15}
                                            fill="red"
                                        />
                                        <span>Delete row</span>
                                    </Button>
                                </div>
                            </InfoModal>
                        )}
                    </div>
                </div>
            </div>
            {editTitle && (
                <Modal isOpen={editTitle} onClose={() => setEditTitle(false)}>
                    <EditKanbanRowTitleForm
                        id={id}
                        title={title}
                        onClose={() => setEditTitle(false)}
                    />
                </Modal>
            )}
            <div className={styles.row_items}>
                {tasks.map((card) => (
                    <KanbanRowItem
                        rowId={id}
                        rowTitle={title}
                        key={card.id}
                        id={card.id}
                        desc={card.desc}
                        priority={card.priority}
                        title={card.title}
                        date={card.date}
                    />
                ))}
            </div>
            <div className={styles.row_add}>
                <KanbanRowAddItem id={id} title={title} />
            </div>
        </div>
    );
});
