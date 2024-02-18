import React from "react";
import styles from "./KanbanRow.module.scss";
import { KanbanRowItem } from "../../KanbanRowItem";
import MoreIcon from "shared/assets/icons/more.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { KanbanRowAddItem } from "../../KanbanRowAddItem";

export const KanbanRow = () => {
    return (
        <div className={styles.row}>
            <div className={styles.row_top}>
                <div className={styles.row_top_wrapper}>
                    <p className={styles.row_top_title}>Row Title</p>
                    <div className={styles.row_top_buttons}>
                        <Button
                            className={styles.row_top_btn}
                            theme={ButtonTheme.CLEAR}
                        >
                            <MoreIcon width={16} height={16} />
                        </Button>
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
