import React from "react";
import styles from "./SidebarItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useLocation } from "react-router-dom";
interface sidebarListProps {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    name: string;
    to: string;
    collapsed: boolean;
}
export const SidebarItem = (props: sidebarListProps) => {
    const { id, Icon, name, to, collapsed } = props;

    const location = useLocation();
    console.log(collapsed);
    return (
        <li
            className={`${styles.sidebar_list_item} ${
                collapsed ? styles.collapsed : ""
            } ${location.pathname.includes(`/${to}`) ? styles.active : ""}`}
        >
            <AppLink to={`/dashboard/${id}/${to}`}>
                <Icon width={20} height={20} />
                <span>{name}</span>
            </AppLink>
        </li>
    );
};
