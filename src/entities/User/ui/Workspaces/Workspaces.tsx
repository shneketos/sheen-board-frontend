import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./Workspaces.module.scss";
import { useUserStore } from "entities/User";
import { useEffect } from "react";
import { WorkspaceItem } from "../WorkspaceItem/WorkspaceItem";
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
    return (
        <>
            {workspaces !== null &&
                (workspaces.length > 0 ? (
                    <>
                        <div className={styles.title}>
                            <span>Workspace title</span>
                            <span>Workspace action</span>
                        </div>
                        <ul className={styles.workspaces}>
                            {workspaces.map((space) => (
                                <WorkspaceItem
                                    id={space.id}
                                    key={space.id}
                                    owner={space.ownerId}
                                    members={space.members}
                                    title={space.title}
                                />
                            ))}
                        </ul>
                    </>
                ) : (
                    <p className={styles.clear}>You don't have workspaces</p>
                ))}
        </>
    );
};
