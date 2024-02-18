import React from "react";
import styles from "./KanbanRow.module.scss";
import { KanbanRowItem } from "../../KanbanRowItem";
import MoreIcon from "shared/assets/icons/more.svg";
import PencilIcon from "shared/assets/icons/pencil.svg";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { KanbanRowAddItem } from "../../KanbanRowAddItem";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";

export const KanbanRow = () => {
    const [rowModalOpened, setRowModalOpened] = React.useState(false);
    return (
        <div className={styles.row}>
            <div className={styles.row_top}>
                <div className={styles.row_top_wrapper}>
                    <p className={styles.row_top_title}>Row Title</p>
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
                                    >
                                        <PencilIcon width={15} height={15} />
                                        <span>Edit title</span>
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.CLEAR}
                                        className={
                                            styles.row_modal_wrapper_delete_cards
                                        }
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
            <div className={styles.row_items}>
                <KanbanRowItem priority="low" />
                <KanbanRowItem priority="medium" />
                <KanbanRowItem priority="high" />
            </div>
            <div className={styles.row_add}>
                <KanbanRowAddItem />
            </div>
        </div>
    );
};
