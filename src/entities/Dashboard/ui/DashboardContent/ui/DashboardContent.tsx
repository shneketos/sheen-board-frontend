import React from "react";
import styles from "./DashboardContent.module.scss";
import { DashboardCard } from "../../DashboardCard";
import { DashboardCreateCard } from "../../DashboardCreateCard";
export const DashboardContent = () => {
    const test = [{ id: "123123123", name: "TESTSLUG1123123" }];

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
                <DashboardCreateCard />
            </div>
        </div>
    );
};
