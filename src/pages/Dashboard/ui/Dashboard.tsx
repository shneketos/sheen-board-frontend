import React from "react";
import styles from "./Dashboard.module.scss";
import { DashboardCard } from "entities/Dashboard";
import { DashboardCreateCard } from "entities/Dashboard/ui/DashboardCreateCard";

export const Dashboard = () => {
    const test = [{ id: "123123123", name: "TESTSLUG1123123" }];
    return (
        <>
            <div className="content__wrapper">
                <div className={styles.dashboard}>
                    <div className={styles.dashboard_meet}>
                        <p>Hello,User!</p>
                        <span>Choose workspace</span>
                    </div>
                    <div className={styles.daboard_bottom}>
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
            </div>
        </>
    );
};

export default Dashboard;
