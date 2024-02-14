import React from "react";
import styles from "./Dashboard.module.scss";
import { Sidebar } from "widgets/Sidebar";
export const Dashboard = () => (
    <>
        <Sidebar />
        <div className="content__wrapper">
            <h1 className={styles.h1}>HELLO!</h1>
        </div>
    </>
);

export default Dashboard;
