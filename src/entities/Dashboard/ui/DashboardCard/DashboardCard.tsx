import styles from "./DashboardCard.module.scss";
import WorkspaceIcon from "shared/assets/icons/workspace.svg?react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
import { type DashboardCard as Props } from "entities/Dashboard/model/types/DashboardType";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";

export const DashboardCard = memo((props: Props) => {
    const { id, title } = props;
    const fetchThisDash = useDashboardStore((state) => state.fetchThisDash);
    const onClick = () => {
        fetchThisDash(id);
    };
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
                            onClick={onClick}
                        >
                            {title}
                        </AppLink>
                    </div>
                </div>
            </div>
        </div>
    );
});
