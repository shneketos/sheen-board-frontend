import { DashboardContent } from "entities/Dashboard/ui/DashboardContent";
import React from "react";
import { Sidebar } from "widgets/Sidebar";

export const DashboardPage = () => {
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">
                <DashboardContent />
            </section>
        </>
    );
};

export default DashboardPage;
