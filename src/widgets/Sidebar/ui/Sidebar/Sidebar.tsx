import React, { memo, useCallback } from "react";
import styles from "./Sidebar.module.scss";
import Sidebar_arrow from "shared/assets/icons/sidebar_arrow.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarUpper } from "../SidebarUpper/SidebarUpper";
import { SidebarBottom } from "../SidebarBottom/SidebarBottom";
export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = React.useState(false);
    const onClickCollapse = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
        >
            <div className={styles.sidebar_content}>
                <SidebarUpper collapsed={collapsed} />
            </div>
            <SidebarBottom collapsed={collapsed} />
            <div className={styles.sidebar_bottom}>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    className={styles.toggle_collapse}
                    onClick={onClickCollapse}
                >
                    <Sidebar_arrow
                        className={`${styles.collapse_icon} ${
                            collapsed ? styles.collapsed_icon : ""
                        }`}
                    />
                </Button>
            </div>
        </div>
    );
});
