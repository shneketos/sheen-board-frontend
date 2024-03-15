import React, { memo } from "react";
import styles from "./SidebarItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useLocation } from "react-router-dom";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
interface sidebarListProps {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    name: string;
    to: string;
    collapsed: boolean;
}
export const SidebarItem = memo((props: sidebarListProps) => {
    const { id, Icon, name, to, collapsed } = props;
    const [showInfo, setShowInfo] = React.useState(false);
    const location = useLocation();
    return (
        <li
            className={`${styles.sidebar_list_item} ${
                collapsed ? styles.collapsed : ""
            } ${location.pathname.includes(`/${to}`) ? styles.active : ""}`}
        >
            <AppLink
                to={`/dashboard/${id}/${to}`}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <Icon width={20} height={20} />
                <span>{name}</span>
                {collapsed && showInfo && (
                    <InfoModal className={styles.sidebar_list_item_modal}>
                        {name}
                    </InfoModal>
                )}
            </AppLink>
        </li>
    );
});
