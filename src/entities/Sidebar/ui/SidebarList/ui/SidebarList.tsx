import React from "react";
import styles from "./SidebarList.module.scss";
import OverviewIcon from "shared/assets/icons/overview.svg";
import BoardIcon from "shared/assets/icons/kanban.svg";
import BacklogIcon from "shared/assets/icons/backlog.svg";
import RoadmapIcon from "shared/assets/icons/roadmap.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { SidebarItem } from "../../SidebarItem";

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
        { name: "Roadmap", to: "roadmap", icon: RoadmapIcon },
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
