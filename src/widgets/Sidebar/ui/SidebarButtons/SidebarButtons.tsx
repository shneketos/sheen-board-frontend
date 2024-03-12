import React from "react";
import styles from "./SidebarButtons.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import SettingsIcon from "shared/assets/icons/settings.svg?react";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import { Logout } from "entities/User";
interface sidebarListProps {
    collapsed: boolean;
}
export const SidebarButtons = (props: sidebarListProps) => {
    const { collapsed } = props;
    const [showSettings, setShowSettings] = React.useState(false);
    const [showLogout, setShowLogout] = React.useState(false);

    return (
        <div
            data-testid="sidebar_buttons"
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
                onClick={Logout}
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
