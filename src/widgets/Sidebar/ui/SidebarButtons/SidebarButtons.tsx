import React from "react";
import styles from "./SidebarButtons.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import SettingsIcon from "shared/assets/icons/settings.svg";
import LogoutIcon from "shared/assets/icons/logout.svg";
interface sidebarListProps {
    collapsed: boolean;
}
export const SidebarButtons = (props: sidebarListProps) => {
    const { collapsed } = props;
    return (
        <div
            className={`${styles.sidebar_buttons} ${
                collapsed ? styles.collapsed : ""
            }`}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_settings}
            >
                <SettingsIcon width={20} height={20} />
                <span>Settings</span>
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_logout}
            >
                <LogoutIcon width={20} height={20} />
                <span>Logout</span>
            </Button>
        </div>
    );
};
