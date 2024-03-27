import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./Workspaces.module.scss";
import { useUserStore } from "entities/User";
import { useEffect } from "react";
export const Workspaces = () => {
    const workspaces = useDashboardStore((state) => state.workspaces);
    const fetchWorkspaces = useDashboardStore(
        (state) => state.fetchUserWorkspaces
    );
    const user = useUserStore((state) => state.user);
    console.log(user);
    useEffect(() => {
        fetchWorkspaces(user.id);
    }, [fetchWorkspaces, user.id]);
    console.log(workspaces);
    return <div className={styles.Workspaces}>Workspaces</div>;
};
