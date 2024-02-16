import React from "react";
import styles from "./SidebarButtons.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import SettingsIcon from "shared/assets/icons/settings.svg";
import LogoutIcon from "shared/assets/icons/logout.svg";
export const SidebarButtons = () => {
    return (
        <div className={styles.sidebar_buttons}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_settings}
            >
                <SettingsIcon width={50} height={50} />
                <span>Settings</span>
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={styles.sidebar_buttons_logout}
            >
                <LogoutIcon width={50} height={50} />
                <span>Logout</span>
            </Button>
        </div>
    );
};
