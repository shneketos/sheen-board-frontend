import React from "react";
import styles from "./Sidebar.module.scss";
import Sidebar_arrow from "shared/assets/icons/sidebar_arrow.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import { useLocation, useParams } from "react-router-dom";
import { SidebarList } from "../SidebarList/SidebarList";
import { SidebarButtons } from "../SidebarButtons/SidebarButtons";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const onClickCollapse = () => {
        setCollapsed(!collapsed);
    };
    const { id } = useParams();
    const location = useLocation();
    const isWorkSpace = location.pathname.includes(`/dashboard/${id}/`);
    console.log(location.pathname, isWorkSpace);
    return (
        <div
            data-testid="sidebar"
            className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
        >
            <div className={styles.sidebar_content}>
                <div className={styles.sidebar_workspace}>
                    <SidebarList id={id} />
                </div>
            </div>
            <SidebarButtons />
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
};
