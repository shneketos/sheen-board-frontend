import React from "react";
import styles from "./SidebarButtons.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import SettingsIcon from "shared/assets/icons/settings.svg";
import LogoutIcon from "shared/assets/icons/logout.svg";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
interface sidebarListProps {
    collapsed: boolean;
}
export const SidebarButtons = (props: sidebarListProps) => {
    const { collapsed } = props;
    const [showSettings, setShowSettings] = React.useState(false);
    const [showLogout, setShowLogout] = React.useState(false);

    return (
        <div
            className={`${styles.sidebar_buttons} ${
                collapsed ? styles.collapsed : ""
            }`}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_settings}
                onMouseEnter={() => setShowSettings(true)}
                onMouseLeave={() => setShowSettings(false)}
            >
                <SettingsIcon width={20} height={20} />
                <span>Settings</span>
                {collapsed && showSettings && (
                    <InfoModal className={styles.sidebar_buttons_modal}>
                        Settings
                    </InfoModal>
                )}
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_logout}
                onMouseEnter={() => setShowLogout(true)}
                onMouseLeave={() => setShowLogout(false)}
            >
                <LogoutIcon width={20} height={20} />
                <span>Logout</span>
                {collapsed && showLogout && (
                    <InfoModal className={styles.sidebar_buttons_modal}>
                        Logout
                    </InfoModal>
                )}
            </Button>
        </div>
    );
};
