import React, { memo, useCallback } from "react";
import styles from "./Sidebar.module.scss";
import Sidebar_arrow from "shared/assets/icons/sidebar_arrow.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useLocation, useParams } from "react-router-dom";
import { SidebarButtons } from "../SidebarButtons/SidebarButtons";
import { SidebarList } from "../SidebarList/SidebarList";

export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = React.useState(false);
    const onClickCollapse = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);
    const { id } = useParams();
    const location = useLocation();
    const isWorkSpace = location.pathname.includes(`/dashboard/${id}/`);
    return (
        <div
            data-testid="sidebar"
            className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
        >
            <div className={styles.sidebar_content}>
                {isWorkSpace && (
                    <div className={styles.sidebar_workspace}>
                        <SidebarList id={id} collapsed={collapsed} />
                    </div>
                )}
            </div>
            <SidebarButtons collapsed={collapsed} />
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
