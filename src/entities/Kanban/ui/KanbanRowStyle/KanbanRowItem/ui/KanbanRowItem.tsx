import React from "react";
import styles from "./KanbanRowItem.module.scss";
import MoreIcon from "shared/assets/icons/more.svg";
import ClockIcon from "shared/assets/icons/clock.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import { Modal } from "shared/ui/modal/Modal";

interface KanbanRowItemProps {
    priority: string;
}

export const KanbanRowItem = (props: KanbanRowItemProps) => {
    const info = {
        title: "Title exmaple",
        desc: "descasfasfasfasfasfasfasfasfasf",
    };
    const { priority } = props;
    const [cardOpened, setCardOpened] = React.useState(false);
    const [rowModalOpened, setRowModalOpened] = React.useState(false);
    return (
        <div className={styles.row_item_wrapper}>
            <div className={styles.row_item}>
                <div className={styles.row_item_top}>
                    <p
                        className={styles.row_item_top_title}
                        onClick={() => setCardOpened(true)}
                    >
                        {info.title}
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
                            Feb 24
                        </span>
                    </div>
                </div>
            </div>
            <Modal isOpen={cardOpened} onClose={() => setCardOpened(false)}>
                <div className={styles.cardOpened}>
                    <div> {info.title}</div>
                    <div> {info.desc}</div>
                </div>
            </Modal>
        </div>
    );
};
