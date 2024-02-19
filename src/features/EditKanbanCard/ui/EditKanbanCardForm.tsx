import React from "react";
import styles from "./EditKanbanCardForm.module.scss";
import PencilIcon from "shared/assets/icons/pencil.svg";
import CloseIcon from "shared/assets/icons/close.svg";
import ListIcon from "shared/assets/icons/list.svg";
import PriorityIcon from "shared/assets/icons/priority.svg";
import ClockIcon from "shared/assets/icons/clock.svg";
import FlagIcon from "shared/assets/icons/flag.svg";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";

import { type KanbanCardProps } from "../model/types/KanbanCardTypes";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const EditKanbanCardForm = (props: KanbanCardProps) => {
    const { title, desc, priority, date, rowTitle } = props;
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <div className={styles.form_top_left}>
                    <p>{title}</p>
                    <PencilIcon width={20} height={20} />
                </div>
                <div className={styles.form_top_right}>
                    <CloseIcon width={20} height={20} />
                </div>
            </div>
            <div className={styles.form_center}>
                <div className={styles.form_center_row}>
                    <FlagIcon width={20} height={20} />
                    <span>{rowTitle}</span>
                </div>
                <div className={styles.form_center_desc}>
                    <ListIcon width={20} height={20} />
                    <span>{desc}</span>
                </div>
                <div className={styles.form_center_priority}>
                    <PriorityIcon width={20} height={20} />
                    <span className={styles[priority]}>{priority}</span>
                </div>
                <div className={styles.form_center_due}>
                    <ClockIcon width={20} height={20} />
                    <span>{date}</span>
                </div>
            </div>
            <div className={styles.form_bottom}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.form_bottom_delete}
                >
                    <TrashcanIcon width={20} height={20} fill="red" />
                    <span>Delete card</span>
                </Button>
            </div>
        </div>
    );
};
