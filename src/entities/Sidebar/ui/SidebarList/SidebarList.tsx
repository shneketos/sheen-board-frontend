import React from "react";
import styles from "./SidebarList.module.scss";
import OverviewIcon from "shared/assets/icons/overview.svg?react";
import BoardIcon from "shared/assets/icons/kanban.svg?react";
import BacklogIcon from "shared/assets/icons/backlog.svg?react";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface sidebarListProps {
    id: string;
    collapsed: boolean;
}

export const SidebarList = (props: sidebarListProps) => {
    const { id, collapsed } = props;
    console.log(id);

    const SidebarRoutes = [
        { name: "Overview", to: "overview", icon: OverviewIcon },
        { name: "Kanban", to: "kanban", icon: BoardIcon },
        { name: "Backlog", to: "backlog", icon: BacklogIcon },
        { name: "Calendar", to: "calendar", icon: CalendarIcon },
    ];

    return (
        <ul className={styles.sidebar_list}>
            {SidebarRoutes.map((item) => (
                <SidebarItem
                    id={id}
                    Icon={item.icon}
                    name={item.name}
                    key={item.name}
                    to={item.to}
                    collapsed={collapsed}
                />
            ))}
        </ul>
    );
};
