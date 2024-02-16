import React from "react";
import styles from "./SidebarList.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import WorkspaceIcon from "shared/assets/icons/workspace.svg";
import BoardIcon from "shared/assets/icons/board.svg";
import BacklogIcon from "shared/assets/icons/backlog.svg";
import RoadmapIcon from "shared/assets/icons/roadmap.svg";

interface sidebarListProps {
    id: string;
}

export const SidebarList = (props: sidebarListProps) => {
    const { id } = props;
    return (
        <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_list_item}>
                <AppLink to={`/dashboard/${id}/overview`}>
                    <WorkspaceIcon width={50} height={50} />
                    <span>Overview</span>
                </AppLink>
            </li>
            <li className={styles.sidebar_list_item}>
                <AppLink to={`/dashboard/${id}/kanban`}>
                    <BoardIcon width={50} height={50} />
                    <span>Kanban</span>
                </AppLink>
            </li>
            <li className={styles.sidebar_list_item}>
                <AppLink to={`/dashboard/${id}/backlog`}>
                    <BacklogIcon width={50} height={50} />
                    <span>Backlog</span>
                </AppLink>
            </li>
            <li className={styles.sidebar_list_item}>
                <AppLink to={`/dashboard/${id}/roadmap`}>
                    <RoadmapIcon width={50} height={50} />
                    <span>Roadmap</span>
                </AppLink>
            </li>
        </ul>
    );
};
