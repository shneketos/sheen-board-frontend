import React, { useCallback } from "react";
import styles from "./SidebarBottom.module.scss";
import { Logout } from "entities/User";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import SettingsIcon from "shared/assets/icons/settings.svg?react";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
interface sidebarListProps {
    collapsed: boolean;
}

export const SidebarBottom = (props: sidebarListProps) => {
    const navigate = useNavigate();
    const { collapsed } = props;
    const [showSettings, setShowSettings] = React.useState(false);
    const [showLogout, setShowLogout] = React.useState(false);
    const [logout, setLogout] = React.useState(false);
    const onClickLogout = useCallback(() => {
        setLogout(true);
        logout && navigate(RouterPath.signin);
    }, [logout, navigate]);

    return (
        <div
            data-testid="sidebar_bottom"
            className={`${styles.sidebar_buttons} ${
                collapsed ? styles.collapsed : ""
            }`}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_settings}
                onMouseEnter={() => setShowSettings(true)}
                onMouseLeave={() => setShowSettings(false)}
                onClick={() => navigate(RouterPath.settings)}
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
                onClick={onClickLogout}
            >
                <LogoutIcon width={20} height={20} />
                <span>Logout</span>
                {collapsed && showLogout && (
                    <InfoModal className={styles.sidebar_buttons_modal}>
                        Logout
                    </InfoModal>
                )}
            </Button>
            {logout && <Logout />}
        </div>
    );
};
