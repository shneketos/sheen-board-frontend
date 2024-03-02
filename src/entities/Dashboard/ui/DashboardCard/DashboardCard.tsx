import React from "react";
import styles from "./DashboardCard.module.scss";
import WorkspaceIcon from "shared/assets/icons/workspace.svg?react";
import MoreIcon from "shared/assets/icons/more.svg?react";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import type { DashboardCardType } from "entities/Dashboard/model/types/DashboardCard";

export const DashboardCard = (props: DashboardCardType) => {
    const { id, name } = props;

    const [showMore, setShowMore] = React.useState(false);
    const onClickShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div className={styles.dashboard_card}>
            <div className={styles.dashboard_card_wrapper}>
                <div className={styles.dashboard_card_top}>
                    <div className={styles.dashboard_card_top_left}>
                        <WorkspaceIcon width={40} height={40} />
                        <AppLink
                            className={styles.dashboard_card_top_left_title}
                            theme={AppLinkTheme.PRIMARY}
                            to={`/dashboard/${id}/overview`}
                        >
                            {name}
                        </AppLink>
                    </div>
                    <div className={styles.dashboard_card_top_right}>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={onClickShowMore}
                        >
                            <MoreIcon width={40} height={40} />
                        </Button>
                        {showMore ? (
                            <div
                                className={styles.dashboard_card_modal}
                                onMouseLeave={() => {
                                    setShowMore(false);
                                }}
                            >
                                <Button theme={ButtonTheme.CLEAR}>
                                    <LogoutIcon width={30} height={30} />
                                    <span>Leave project</span>
                                </Button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
