import styles from "./Dashboard.module.scss";
import { DashboardCard } from "../DashboardCard/DashboardCard";
import { DashboardCreateCard } from "../DashboardCreateCard/DashboardCreateCard";
import { memo } from "react";
export const Dashboard = memo(() => {
    const test = [{ id: "123123123", name: "TESTSLUG1123123" }];
    const count = 5;
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard_meet}>
                <p>Hello,User!</p>
                <span>Choose workspace</span>
            </div>
            <div className={styles.dashboard_bottom}>
                {test.map((card) => (
                    <DashboardCard
                        id={card.id}
                        name={card.name}
                        key={card.id}
                    />
                ))}
                {count <= 5 && <DashboardCreateCard />}
            </div>
        </div>
    );
});
