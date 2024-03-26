import styles from "./SidebarUpper.module.scss";
import OverviewIcon from "shared/assets/icons/overview.svg?react";
import BoardIcon from "shared/assets/icons/kanban.svg?react";
import BacklogIcon from "shared/assets/icons/backlog.svg?react";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import MembersIcon from "shared/assets/icons/members.svg?react";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useLocation, useParams } from "react-router-dom";
import { SidebarToDashboard } from "../SidebarItem/SidebarToDashboard";
interface sidebarListProps {
    collapsed: boolean;
}
export const SidebarUpper = (props: sidebarListProps) => {
    const { collapsed } = props;
    const { id } = useParams();
    const location = useLocation();
    const isWorkSpace = location.pathname.includes(`/dashboard/${id}`);

    const SidebarRoutes = [
        { name: "Overview", to: "overview", icon: OverviewIcon },
        { name: "Kanban", to: "kanban", icon: BoardIcon },
        { name: "Backlog", to: "backlog", icon: BacklogIcon },
        { name: "Calendar", to: "calendar", icon: CalendarIcon },
        { name: "Members", to: "members", icon: MembersIcon },
    ];
    return (
        <div className={styles.sidebar_list} data-testid="sidebar_upper">
            <ul className={styles.list}>
                <SidebarToDashboard collapsed={collapsed} />
                {isWorkSpace &&
                    SidebarRoutes.map((item) => (
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
        </div>
    );
};
