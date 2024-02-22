import React from "react";
import styles from "./DashboardCreateCard.module.scss";
import PlusCircle from "shared/assets/icons/plusCircle.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const DashboardCreateCard = () => {
    return (
        <div className={styles.dashboard_create_card}>
            <div className={styles.dashboard_create_card_wrapper}>
                <Button theme={ButtonTheme.CLEAR}>
                    <PlusCircle width={125} height={125} />
                </Button>
            </div>
        </div>
    );
};
