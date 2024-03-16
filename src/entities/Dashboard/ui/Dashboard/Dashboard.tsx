import styles from "./Dashboard.module.scss";
import { DashboardCard } from "../DashboardCard/DashboardCard";
import { DashboardCreateCard } from "../DashboardCreateCard/DashboardCreateCard";
import { memo, useEffect } from "react";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useUserStore } from "entities/User";
export const Dashboard = memo(() => {
    const user = useUserStore((state) => state.user);
    const dashboards = useDashboardStore((state) => state.dashboards);
    const isLoading = useDashboardStore((state) => state.isLoading);
    const fetchDashboards = useDashboardStore((state) => state.fetchDashboards);
    useEffect(() => {
        fetchDashboards(user.id);
    }, [fetchDashboards, user.id]);
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard_meet}>
                <p>Hello,User!</p>
                <span>Choose workspace</span>
            </div>
            {!isLoading && (
                <div className={styles.dashboard_bottom}>
                    {dashboards.map((card) => (
                        <DashboardCard
                            id={card.id}
                            title={card.title}
                            key={card.id}
                        />
                    ))}
                    <DashboardCreateCard />
                </div>
            )}
        </div>
    );
});
