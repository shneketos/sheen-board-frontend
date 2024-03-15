import React, { memo } from "react";
import styles from "./SidebarItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import DashboardIcon from "shared/assets/icons/workspace.svg?react";
interface sidebarListProps {
    collapsed: boolean;
}
export const SidebarToDashboard = memo((props: sidebarListProps) => {
    const { collapsed } = props;
    const [showInfo, setShowInfo] = React.useState(false);
    return (
        <li
            className={`${styles.sidebar_list_item} ${
                collapsed ? styles.collapsed : ""
            } `}
        >
            <AppLink
                to={`/dashboard`}
                className={styles.dashboard}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <DashboardIcon width={20} height={20} />
                <span>Dashboard</span>
                {collapsed && showInfo && (
                    <InfoModal className={styles.sidebar_list_item_modal}>
                        Dashboard
                    </InfoModal>
                )}
            </AppLink>
        </li>
    );
});
