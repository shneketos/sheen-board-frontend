import React from "react";
import styles from "./KanbanRowItem.module.scss";
import MoreIcon from "shared/assets/icons/more.svg";
import ClockIcon from "shared/assets/icons/clock.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import { Modal } from "shared/ui/modal/Modal";
import { EditKanbanCardForm } from "features/EditKanbanCard";
import { type KanbanCardProps } from "entities/Kanban/model/types/KanbanTypes";

export const KanbanRowItem = (props: KanbanCardProps) => {
    const { id, title, desc, priority, date, rowId, rowTitle } = props;
    const [cardOpened, setCardOpened] = React.useState(false);
    const [rowModalOpened, setRowModalOpened] = React.useState(false);
    const [cardOpened2, setCardOpened2] = React.useState(false);

    const onClickDeleteCard = () => {
        console.log(
            `card ${title} id ${id} in row ${rowTitle} id ${rowId} deleted`
        );
        setRowModalOpened(false);
    };

    return (
        <div className={styles.row_item_wrapper}>
            <div className={styles.row_item}>
                <div className={styles.row_item_top}>
                    <p
                        className={styles.row_item_top_title}
                        onClick={() => setCardOpened(true)}
                    >
                        {title}
                    </p>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.row_item_top_btn}
                        onClick={() => setRowModalOpened(!rowModalOpened)}
                    >
                        <MoreIcon width={15} height={15} />
                    </Button>
                    {rowModalOpened && (
                        <InfoModal className={styles.row_item_modal}>
                            <div
                                className={styles.row_item_modal_wrapper}
                                onMouseLeave={() => setRowModalOpened(false)}
                            >
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={
                                        styles.row_item_modal_wrapper_view
                                    }
                                    onClick={() => setCardOpened(true)}
                                >
                                    <EyeIcon width={15} height={15} />
                                    <span>View card</span>
                                </Button>
                                <Button
                                    onClick={onClickDeleteCard}
                                    theme={ButtonTheme.CLEAR}
                                    className={
                                        styles.row_item_modal_wrapper_delete
                                    }
                                >
                                    <TrashcanIcon
                                        width={15}
                                        height={15}
                                        fill="red"
                                    />
                                    <span>Delete card</span>
                                </Button>
                            </div>
                        </InfoModal>
                    )}
                </div>
                <div className={styles.row_item_bottom}>
                    <span
                        className={`${styles.row_item_bottom_priority} ${styles[priority]}`}
                    >
                        {`${priority} priority`}
                    </span>
                    <div className={styles.row_item_bottom_date}>
                        <ClockIcon
                            className={styles.row_item_bottom_icon}
                            width={18}
                            height={18}
                        />
                        <span className={styles.row_item_bottom_due}>
                            {date}
                        </span>
                    </div>
                </div>
            </div>
            {cardOpened && (
                <Modal isOpen={cardOpened} onClose={() => setCardOpened(false)}>
                    <EditKanbanCardForm
                        rowId={rowId}
                        rowTitle={rowTitle}
                        title={title}
                        desc={desc}
                        id={id}
                        priority={priority}
                        date={date}
                        onClose={() => setCardOpened(false)}
                    />
                </Modal>
            )}
        </div>
    );
};
