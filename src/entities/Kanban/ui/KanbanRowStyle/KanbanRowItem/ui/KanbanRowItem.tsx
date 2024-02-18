import React from "react";
import styles from "./KanbanRowItem.module.scss";
import MoreIcon from "shared/assets/icons/more.svg";
import ClockIcon from "shared/assets/icons/clock.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
interface KanbanRowItemProps {
    priority: string;
}

export const KanbanRowItem = (props: KanbanRowItemProps) => {
    const { priority } = props;
    return (
        <div className={styles.row_item_wrapper}>
            <div className={styles.row_item}>
                <div className={styles.row_item_top}>
                    <p className={styles.row_item_top_title}>Title exmaple</p>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.row_item_top_btn}
                    >
                        <MoreIcon width={15} height={15} />
                    </Button>
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
        </div>
    );
};
