import styles from "./DashboardCard.module.scss";
import WorkspaceIcon from "shared/assets/icons/workspace.svg?react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import type { DashboardCardType } from "entities/Dashboard/model/types/DashboardCard";
import { memo } from "react";

export const DashboardCard = memo((props: DashboardCardType) => {
    const { id, name } = props;
    return (
        <div className={styles.dashboard_card}>
            <div className={styles.dashboard_card_wrapper}>
                <div className={styles.dashboard_card_top}>
                    <div className={styles.dashboard_card_top_left}>
                        <WorkspaceIcon width={20} height={20} />
                        <AppLink
                            className={styles.dashboard_card_top_left_title}
                            theme={AppLinkTheme.PRIMARY}
                            to={`/dashboard/${id}/overview`}
                        >
                            {name}
                        </AppLink>
                    </div>
                </div>
            </div>
        </div>
    );
});
